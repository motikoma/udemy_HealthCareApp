import {IFood} from './interfaces.js';
import {Score} from './score.js';

export class Food implements IFood {
    public element: HTMLDivElement;

    public constructor(element: HTMLDivElement) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }

    public clickEventHandler(): void {
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
