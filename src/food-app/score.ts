import {IScore} from './interfaces.js';
import {Foods} from './foods.js';

export class Score implements IScore {
    // private:定義があるクラス以外からの操作を禁止
    // static:クラスに属する
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
