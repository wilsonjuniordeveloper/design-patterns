import IObserver from '../interfaces/IObserver'
import ISubject from '../interfaces/ISubject'

export default class OrderObserver implements IObserver {
    private subject: ISubject

    constructor(subject: ISubject) {
        this.subject = subject
        this.subject.attachObserver(this)
    }

    public update(value: string) {
        //enviar um email:
        console.log("new order", value)
    }

}