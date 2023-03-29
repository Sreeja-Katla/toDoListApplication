import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CRUDserviceService } from '../crudservice.service';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.scss'],
})
export class UserDashBoardComponent implements OnInit{
  taskInput = '';
  todo= [
    { id:1,'name':"task1"},

  ]

  taskList!:any;
  updateTask!:{};
  editIndex!:number;

  constructor(public service: CRUDserviceService,public dialogService: DialogModule) {}


  ngOnInit(): void {
  this.taskList =this.service.todoList
  //  console.log(this.service.todoList);
  }



 public addTasks(taskInput: string):void {

    console.log(this.taskInput);
    this.service.addTask(taskInput);
    this.taskInput = '';
  }



 public deleteTask(index: number):void {
  this.service.deleteTask(index)
    // alert("Are you sure to delete..?")
  }



  display: boolean = false;

    editTask(task:{id:number,name:string},index:number) {
      console.log(task);
        this.display = true;
        this.updateTask= this.taskList[index].name ;
        this.editIndex=index;
        console.log(this.editIndex);

    }

 updateTasks(){
 console.log(this.updateTask);
 this.display = false;
this.taskList[this.editIndex].name= this.updateTask
    }
}
