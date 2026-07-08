export{}
class House{
    constructor(public room: number,public bathroom: number,public area: number , public pirce: number){}
    show(): void{
        console.log(`
            Rooms: ${this.room}
            Bathroom: ${this.bathroom}
            Area: ${this.area}
            Pirce: ${this.pirce}
            `);
    }
    chgpirce(newpirce: number): void{
        this.pirce = newpirce;
        console.log(`Pirce: ${this.pirce}`)
    }
}

const house1 = new House(4,5,200,1000000);
house1.chgpirce(200);
house1.show();
