/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-parameter-properties */
/* eslint-disable no-shadow */

interface IScore {
    readonly totalScore: number;
    render: () => void;
}

interface IFood {
    element: HTMLDivElement;
    clickEventHandler: () => void;
}

interface IFoods {
    elements: NodeListOf<HTMLDivElement>;
    activeElements: HTMLDivElement[];
    activeElementsScore: number[];
}

class Score implements IScore {
    private static instance: Score;

    public get totalScore(): number {
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => {
            return total + score;
        }, 0);
    }

    public static getInstance(): Score {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }

    public render(): void {
        if (document.querySelector('.score__number')) {
            (document.querySelector('.score__number') as HTMLDivElement).textContent = String(this.totalScore);
        }
    }
}
class Food implements IFood {
    public constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }

    public clickEventHandler(): void {
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
class Foods implements IFoods {
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

    public static getInstance(): Foods {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
// const foods = Foods.getInstance();
