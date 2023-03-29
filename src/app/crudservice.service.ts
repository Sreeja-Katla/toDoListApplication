import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDserviceService {

  todoId:number=2
  todoList=[

  {id:1,'name':"task1"}
  ]

  constructor() {
    console.log(this.todoList);

  }

  addTask(taskname:string){
    this.todoList.push({id:this.todoId++,"name":taskname})
  }

  deleteTask(index:number){
    this.todoList.splice(index,1);
  }


}
