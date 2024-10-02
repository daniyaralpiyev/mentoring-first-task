import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todos } from "./todos-list/todos-list.component";

@Injectable({ providedIn: 'root' })
export class TodosService {
    // доступ только в этом файле
    private todosSubject$ = new BehaviorSubject<Todos[]>([]);

    // переменную todos$ можно использовать вне файла
    todos$ = this.todosSubject$.asObservable();

    // установка todos
    setTodos(todos: Todos[]) {
        this.todosSubject$.next(todos);
    }

    // изменение todos
    editTodos(editedTodo: Todos) {
        // next перезаписывает данные по новому и возвращает обновленный массив после завершения функции map
        this.todosSubject$.next(
            this.todosSubject$.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo;
                    } else {
                        return todo;
                    }
                }
            )
        )
    }

    // создание todo
    createTodo(todo: Todos) {
        // next перезаписывает данные по новому и возвращает обновленный массив
        this.todosSubject$.next(
            // spread operator ... - это оператор расширения,
            // он создает новый массив, который включает все элементы из this.todos$
            // и добавляет в конец новый объект todo
            [...this.todosSubject$.value, todo]
        )
    }

    // удаление todo
    deleteTodo(id: number) {
        // next перезаписывает данные по новому и возвращает обновленный массив
        this.todosSubject$.next(
            this.todosSubject$.value.filter(
                // метод filter проверяет если id не равны оставляет, иначе исключает
                item => item.id !== id
            )
        )
    }
}