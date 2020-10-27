/* eslint-disable no-new */
import {IFoods} from './interfaces.js';
import {Food} from './food.js';

export class Foods implements IFoods {
    private static instance: Foods;

    public elements = document.querySelectorAll<HTMLDivElement>('.food');

    private _activeElements: HTMLDivElement[] = [];

    private _activeElementsScore: number[] = [];

    public get activeElements(): HTMLDivElement[] {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }

    public get activeElementsScore(): number[] {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }

    private constructor() {
        this.elements.forEach(element => {
            new Food(element);
        });
    }

    // staticをつけたプロパティはインスタンスではなくてクラスに属する
    public static getInstance(): Foods {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
