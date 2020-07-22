import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoItem } from '../todo-item/todo-item.model';

export interface NewTodoData {
  todo: TodoItem;
  categories: Object;
  edit: boolean;
}

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  // styleUrls: ['./new-todo.component.scss']
})
export class TodoEditorDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TodoEditorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: NewTodoData) { }

  onCancel() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}