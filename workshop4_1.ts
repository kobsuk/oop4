class Animal{
    constructor(public species: string, public sound: string){}
    makeSound(): void{
        console.log(`This ${this.species} say ${this.sound}`)
    }
}
const animal1 = new Animal('dog','bark bark');
animal1.makeSound();
