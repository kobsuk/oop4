export{}
class Hero{
    constructor(public name: string, public hp: number, public attackPower: number){}
    attack(target: Hero): void {
        target.hp -= this.attackPower;
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);
        if (target.hp <= 0) {
            console.log(`${target.name} has fainted!`);
        }
    }
}

const warrior = new Hero('Arthur', 100, 40);
const mage = new Hero('Gandalf', 60, 20);

warrior.attack(mage); 

mage.attack(warrior);
