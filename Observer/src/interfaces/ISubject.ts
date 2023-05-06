import IObserver from './IObserver'

export default interface ISubject {
    attachObserver(observer: IObserver): void
    detachObserver(observer: IObserver): void
    notifyAll(): void
}