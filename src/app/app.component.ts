import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// const time = new Date().getTime()

// console.log('time:', time)

// if (time === 23423423321315315) {
//   console.log('time is correct')
// } else {
//   console.log('ERROR')
// }

// const func1 = (value: number) => console.log('number is:', value);

// func1(1);


// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])
// console.log(names[4])

// console.log(names[0]);

// const shooping = (name: string, item1: string, item2: string, item3: string, proce: [number, number, number]) => {
//   return name + ' Пошел в магазин ' + 'Он купил там сначала ' + item1 + ' Затем он купил ' + item2 + ' В конце он купил ' + item3
// }

// const shoppingResult = shooping('Ильнур', 'Хлеб', 'Мясо', 'Молоко', [30, 350, 70]);

// console.log(shoppingResult)

const showCatalogCompany = (textMenu: string) => textMenu;
const text: string = 'О компании'

const newPagesArrays = [5, 4, 3, 2, 1]
const menuItems = ['Каталог', 'Стройматериалы', ' Инструменты', ' Электрика', ' Интерьер и одежда'];

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

console.log(upperCaseMenuItems)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly aboutCompany = showCatalogCompany(text)
  showCatalogCompany = false;
  showimageMain = true;
  readonly newPages = newPagesArrays
  readonly footer1 = 'Главная'
  readonly footer2 = 'О компании'
  readonly footer3 = 'Каталог'

  isUpperCase = true
  
  menuItems = upperCaseMenuItems;
  
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    
    this.isUpperCase = !this.isUpperCase
  }


  isShowCatalog = false;

  readonly headerItem1 = 'Главная';
  readonly headerItem2 = 'О компании';
  readonly headerItem3 = 'Каталог';

  readonly header2Item2 = 'Стройматериалы';
  readonly header2Item3 = 'Инструменты';
  readonly header2Item4 = 'Электрика';
  readonly header2Item5 = 'Интерьер и одежда';
}
