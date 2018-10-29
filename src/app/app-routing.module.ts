import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './components/topics/topics.component'
import { CourseComponent } from './components/course/course.component'
import { EditarTopicComponent } from './components/editar-topic/editar-topic.component'

const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics',     component: TopicsComponent },
  { path: 'course', component: CourseComponent},
  { path: 'editarTopic/:id', component: EditarTopicComponent}
  // pasamos id dentro de la URL para asignar una tarea específica
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ CourseComponent, TopicsComponent, EditarTopicComponent]