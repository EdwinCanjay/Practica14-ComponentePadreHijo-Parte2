import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
const routes:Routes=[
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"posts",
    loadChildren:()=> import('./pages/posts/posts.module').then(m=>m.PostsModule)
    //loadChildren:'./pages/posts/posts.module#PostsModule'
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"**",
    redirectTo:"home"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
