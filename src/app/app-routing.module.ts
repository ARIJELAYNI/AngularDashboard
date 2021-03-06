import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './modules/posts/posts.component';
import { AppComponent } from './app.component';

const routes = [
  { path:'login', component: AppComponent },
  { path:'dashboard',
    component: DefaultComponent,
    children: [
      {  path:'',
        component: DashboardComponent
      },
      { path:'posts',
        component: PostsComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
