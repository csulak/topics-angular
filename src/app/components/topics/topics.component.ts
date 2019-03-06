import { Component, Input, OnInit } from '@angular/core';
import { TopicsService } from "../../services/topics.services"
import { Topics } from '../../domain/topics'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  providers: [TopicsService],
  styles: []
})
export class TopicsComponent {

  id: string
  name: string
  description: string
  topicsPosibles: Topics[]
  errors = []
  isAllFieldsCompleted = true

  constructor(private topicsService: TopicsService, private router: Router, private route: ActivatedRoute) {
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }
    //  Truco para que refresque la pantalla 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false

  }


  async initialize() {
    const res = await this.topicsService.allTopics()
    this.topicsPosibles = res.json().map(topicJson => new Topics(topicJson.id, topicJson.name, topicJson.description))

  }

  // asi funcionaba sin usar async/await (ver topics.service.ts) deje un comentario
  /*constructor(private topicsService: TopicsService, private router: Router, private route: ActivatedRoute) {
    this.topicsService.allTopics().then(
      res => {
        this.topicsPosibles = res.json().map(usuarioJson => new Topics(usuarioJson.id, usuarioJson.name, usuarioJson.description))

      }
    ).catch(error => this.errors.push(error))

    //  Truco para que refresque la pantalla 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }*/

  ngOnInit() { 
    this.isAllFieldsCompleted = true
  }

   async crearTopic() {
      let topic = new Topics(this.id, this.name, this.description)
     
      let callback = function(response){
        this.limpiarDatos()
        this.topicsPosibles.push(topic)
      }
      await this.topicsService.crearTopic(topic).then(callback.bind(this)).catch(()=> {})
    //  this.navegarAHome()
  }

  async eliminarTopic(idd: string) {
    let callback = function (response) {
      this.topicsPosibles = this.topicsPosibles.filter(function(value: Topics, index, topicsPosibles){
        return value.id != idd
      })
    }

    await this.topicsService.eliminarTopic(idd).then(callback.bind(this)).catch(() => {})
  }



  limpiarDatos() {
    this.id = ''
    this.name = ''
    this.description = ''
  }

  isIncorrect(){
    return (this.id == null || this.name == null || this.description == null ||
      this.id == "" || this.name == "" || this.description == ""
      )
  }
  navegarAHome() {
    this.router.navigate(['/topics'])
  }
}
