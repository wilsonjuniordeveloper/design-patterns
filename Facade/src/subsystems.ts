export class Deposit {
    getConffee() {
        console.log('> Getting coffee in deposit...')
    }
}

export class ConffeeMachine {
    on() {
        console.log('> Coffee Machine is on')
    }

    prepare() {
        console.log('> Coffee is ready')
    }
}

export class Delivery {
    send(){
        console.log("> Delivery sended")
    }
}