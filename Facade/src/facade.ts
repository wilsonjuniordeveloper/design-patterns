import { ConffeeMachine, Delivery, Deposit } from "./subsystems";

export class CoffeeShop {
    order() {
        const deposit = new Deposit()
        const conffeeMachine = new ConffeeMachine()
        const delivery = new Delivery()

        deposit.getConffee()
        conffeeMachine.on()
        conffeeMachine.prepare()
        delivery.send()
    }
}