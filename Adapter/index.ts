interface IWeapon {
    use(): void
}

class Mecha {
    attack(weapon: IWeapon) {
        weapon.use()
    }
}

//WEAPONS
class Sword{
    slash() {
        console.log("Sword slash")   
    }
}


class MachineGun {
    fire() {
        console.log("Machinae gun fire")   
    }
}

//ADPTER
class SwordAdapter extends Sword implements IWeapon {
    use(): void {
        this.slash()
    }
}

const mecha = new Mecha()

mecha.attack(new SwordAdapter())