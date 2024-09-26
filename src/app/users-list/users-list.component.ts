import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, NgIf, UserCardComponent, AsyncPipe],
    // changeDetection: ChangeDetectionStrategy.OnPush для реактивных данных RXJS
    // с это функцией OnPush работа сайта с данными идет намного быстрее
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(UsersService); // передали из файла users.service.ts

    constructor() {
        // подписка => получение данных методом getUsers из файла users-api.service.ts
        this.usersApiService.getUsers().subscribe(
            // подписка => установка => загрузка данных методом setUsers из файла users.service.ts
            (response: any) => {
                this.usersService.setUsers(response);
            }
        )
    }

    deleteUser_list(id: number) {
        // удаления данных используя метод setUsers из файла users.service.ts
        this.usersService.deleteUser(id);
    }
}
