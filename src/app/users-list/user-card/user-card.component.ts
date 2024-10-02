import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: []
})
export class UserCardComponent {
    // @Input() user_input: any - это входное свойство для получения данных
    @Input()
    user_input: any;

    // @Output() — декоратор, используемый для создания событий
    @Output()
    // EventEmitter — это класс Angular, он же обработчик события который создает событие через клик в html
    deleteUser_card = new EventEmitter();

    onDeleteUser(userId: number) {
        // Метод emit() запускает событие и передаёт данные через userId родительскому компоненту.
        this.deleteUser_card.emit(userId); // выбрасываем событие через emit()
    }
}