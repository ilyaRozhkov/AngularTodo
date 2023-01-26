import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = '';
  public arr = [];
  public todoList: Todo[];

  private httpClient: HttpClient;

  constructor(httpClient:HttpClient){
  this.httpClient = httpClient;
  }

  ngOnInit(){
    let arrs=[];
    this.httpClient.get<Todo[]>('http://194-67-112-168.cloudvps.regruhosting.ru/').subscribe(todoList=>{
      this.todoList = todoList;
      this.onChangeComplited();
    });
    }
    onChangeComplited(){
      this.todoList.forEach(el=>{
        el.complited=false;
      })
    }
  
    onCreate(itemTitle: string){
      this.todoList.push({
        id: this.todoList.length+1,
        title: itemTitle,
        createdAt:Date(),
        complited: false,
        children: []
      })
    }

    onChangeStatusMain(itemId: number){
      console.log(this.todoList);
      this.todoList.forEach(el=>{
        if(el.id==itemId)
        {
          if(el.complited===true){
            el.complited=false;
          }else{
            el.complited=true;
          }
        }
      })
    }

    onChangeStatusChild(itemId: number){
      this.todoList.forEach(el=>{
        el.children.forEach(index=>{
          if(index.id==itemId){
            if(index.complited===true){
              index.complited=false;
            }else{
              index.complited=true;
            }
          }
        })
      })
    }

    onDeleteItem(itemId: number){
      let arr = this.todoList.filter(item=>item.id!=itemId);
      this.todoList = arr;
    }
    onChangeTitle(itemId:number, itemTitle: string){
      console.log(itemId,' = ', itemTitle);
    }

}


