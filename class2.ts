export{}
class Car{
    brand: string;
    model: string;
    type: string;
    cardoor: number;
    engine: number;

    constructor(b: string, m: string, t: string, cd: number, e: number){
        this.brand = b;
        this.model = m;
        this.type = t;
        this.cardoor = cd;
        this.engine = e;
    }
    show():void{
        console.log(`            ***************
            Brand: ${this.brand}
            Model: ${this.model}
            Type: ${this.type}
            Car doors: ${this.cardoor}
            Engine: ${this.engine}
            ***************`)
    }
    chgEngine(newEngine: number): void{
        this.engine = newEngine;
        console.log(`Engine: ${this.engine}`)
    }
}

let Car1 = new Car('Toyota','Camry','Sedan',4,2000);
let Car2 = new Car('Isuzu','Mux','Truck',5,2500);
Car1.chgEngine(5);
Car1.show();
