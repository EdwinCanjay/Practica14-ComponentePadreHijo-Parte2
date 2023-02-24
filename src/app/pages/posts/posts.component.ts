import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
constructor(private dataService:DataService){}

mensajes: any=[];/*[]=[]*/
/*@Input() mensaje:any;*/
ngOnInit(): void {
  console.log("METODO INIT!");
  this.mensajes=this.dataService.getPosts();
  /*.subscribe(
    (posts:any)=>{
      console.log(posts);
      this.mensajes=posts;
    }
  )*/
}
escuchandoClick(id:number){
  console.log("Haciendi click en:",id)
}
}
