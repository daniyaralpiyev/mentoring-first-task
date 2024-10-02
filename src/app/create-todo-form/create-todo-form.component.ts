import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  @Output()
  createTodoForm = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(1)]),
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    completed: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  public submitFormTodo(): void {
    this.createTodoForm.emit(this.form.value);
    this.form.reset();
  }
}
