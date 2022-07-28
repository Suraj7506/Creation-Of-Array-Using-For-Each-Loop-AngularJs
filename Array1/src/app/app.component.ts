import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  



  
  title = 'foreachloop'; 
  data = [
  {id: 1, name:'hello'},
  {id: 2, name:'bird'},
  {id: 3, name:'table'},
  {id: 4, name:'football'},
  {id: 5, name:'pipe'},
  {id: 5, name:'code'},
  
  
  ]
  data1:Array<any> = [];
  ngOnInit(){
  }   
  addNew(){
    if(!this.isReadMore || this.isReadMore){
      this.data1 = [];
    }

    this.isReadMore = !this.isReadMore;
    this.visible = !this.visible;
    this.data.forEach(e =>{
      
      this.data1.push({id:e.id,name:e.name.substr(0,1).toUpperCase() + e.name.slice(1).toLowerCase()})
      
    })
    console.log(this.data1);
  }
  isReadMore = true
  visible = false

  showText() {
     this.isReadMore = !this.isReadMore
  }}

  