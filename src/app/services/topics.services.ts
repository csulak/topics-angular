import { Topics } from "../domain/topics"
import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: Http) { }

  // asi funcionaba sin usar el asyn/await (ver topics.components.ts) deje un comentario
  /* allTopics() {
     return this.http.get('http://localhost:8081/topics').toPromise()
   }*/

  async allTopics() {
    return this.http.get('http://localhost:8081/topics').toPromise()
  }


  
/*    getTopicById(id: string) {
      console.log("el id en topics services es: " + id)

      return this.http.get('http://localhost:8081/topics' + id).pipe(map(res => this.topicAsJson(res.json())))
    }
  */
  async getTopicById(id: string) {
    console.log("el id en topics services es: " + id)

    //return this.http.get('http://localhost:8081/topics/' + id).toPromise()
    
    const res = await this.http.get('http://localhost:8081/topics/' + id).toPromise()
    return Topics.fromJSON(res.json())
  }

  crearTopic(topic: Topics) {
    this.http.post('http://localhost:8081/topics', topic.toJSON()).subscribe()
  }

  async modificarTopic(topic: Topics) {
    this.http.put('http://localhost:8081/topics/' + topic.id, topic.toJSON()).subscribe()
  }

  async eliminarTopic(id: string) {
    this.http.delete('http://localhost:8081/topics/' + id).subscribe()
  }

  private topicAsJson(topicJSON): Topics {
    return Topics.fromJSON(topicJSON)
  }

}