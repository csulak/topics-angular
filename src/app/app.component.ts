import { Component } from '@angular/core';
import { Topics } from './domain/topics'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'topics-angular';

  topics = [
    new Topics("id1", "Curso Java", "topico relaciona a JAVA 8 y POO"),
    new Topics("id2", "Mysql", "La clave de las BD relacionales"),
    new Topics("id3", "GIT", "topic sobre todo lo que debe saber para usar Git en su proyecto")
]
}
