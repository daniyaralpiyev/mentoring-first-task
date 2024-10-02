import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {
  // @Output() это декоратор, который помечает свойство компонента как исходящее событие
  // new EventEmitter() это класс, который используется для создания и отправки событий
  // и здесь createUserForm передали в user-list.component.html
  @Output()
  createUserForm = new EventEmitter();

  // подключаем к html переменную form
  // класс FormGroup обеденяет все FormControl так как FormControl это элемент класса FormGroup
  public form = new FormGroup({
    // каждый класс FormControl будет input
    // '', [Validators.required] означает поле обязательно для заполнения
    // '', [Validators.email] означает поле обязательно для заполнения c @
    // '', [Validators.minLength(5)] означает поле обязательно должно быть минимум 5 символов
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
    website: new FormControl('', [Validators.required, Validators.minLength(5)]),
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public submitForm(): void {
    // emit() используется для генерации или отправки события от дочернего компонента к родительскому.
    // Он вызывается на объекте EventEmitter, который был создан с помощью декоратора @Output().
    this.createUserForm.emit(this.form.value);
    // reset очишает форму после заполнения
    this.form.reset();
  }
}
