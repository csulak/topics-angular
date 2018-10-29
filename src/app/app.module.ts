import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'

// Font Awesome para los íconos
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCheck, faUserMinus, faCalendarCheck, faTasks} from '@fortawesome/free-solid-svg-icons'; 
import { CourseComponent } from './components/course/course.component';
import { TopicsComponent } from './components/topics/topics.component';
import { EditarTopicComponent } from './components/editar-topic/editar-topic.component'


library.add(faUserCheck, faUserMinus, faCalendarCheck, faTasks)

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TopicsComponent,
    routingComponents,
    EditarTopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
