import { Component, OnInit, Input } from '@angular/core';
import { TopicsService } from "../../services/topics.services"
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router'
import { Topics } from '../../domain/topics'

@Component({
  selector: 'app-editar-topic',
  templateUrl: './editar-topic.component.html',
  styles: []
})
export class EditarTopicComponent implements OnInit {
  // como hago para que esta clase reciba el id o el objeto que le quiero pasar de la otra vista
  // al seleccionar un topic cualquiera. necesito ese id para ir a buscar la info con 
  // getTareaById("aca de parametro debe ir el ID que necesito)
  // RTA con esto this.idTopic = this.route.snapshot.params['id']
  topic: Topics

  idTopic: string
  nameTopic: string
  descriptionTopic: string
  errors = []

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
    console.log("idTopic previo a asignar valor: " + this.idTopic)
    this.idTopic = this.route.snapshot.params['id']
    console.log("idTopic despues de asignar valor: " + this.idTopic)
    
  
    this.topic = await this.topicsService.getTopicById(this.idTopic)
    this.nameTopic = this.topic.name
    this.descriptionTopic = this.topic.description
    
    console.log("el nombre del topic original despues de asignar valor: " + this.topic.name)
    console.log("el description del topic original despues de asignar valor: " + this.topic.description)


    // aca para ahorrarme de hacer uno X uno la asignacion. tengo que revisar lo que hizo fer en el ejemplo
    // de asyn y await fijate que en tarea.ts el metodo fromJson(asd) hace esto
    // de hacer el parseo de json a un objeto no se encarga el component.
    // revisar este paso a paso: tarea.component -> llama a todasLasTareas() es decir al servicio -> el servicio llama a Tarea.fromJson(res.json()) -> y la tarea sabe como parsearse jojo
    // this.idTopic = res.json().id
    //this.nameTopic = res.json().name
    // this.descriptionTopic = res.json().description

    //this.topic = new Topics(res.json().id, res.json().name, res.json().description)
    console.log(this.topic)

  }

  ngOnInit() {
  }

  async aceptar() {
    try {
      this.errors = []
      this.validarCreacion()
      let topicc = new Topics(this.idTopic, this.nameTopic, this.descriptionTopic)
      await this.topicsService.modificarTopic(topicc)
      this.navegarAHome()
    }
    catch (error) {
      this.errors.push(error._body)
    }
  }

  cancelar() {
    this.navegarAHome()
  }

  navegarAHome() {
    this.router.navigate(['/topics'])
  }


  validarCreacion() {
    if (this.idTopic == null || this.nameTopic == null || this.descriptionTopic == null ||
      this.idTopic == "" || this.nameTopic == "" || this.descriptionTopic == ""
    ) {
      throw {
        _body: "Debe completar todos los campos"
      }
    }
  }

}
