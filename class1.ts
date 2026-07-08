class Laptop{
    brand: string;
    cpu: string;
    price: number;

    constructor(b: string, p: number, c: string){
        this.brand = b;
        this.price = p;
        this.cpu = c;
    }
    show():void{
        console.log();
        console.log(`Laptop Brand: ${this.brand} CPU: ${this.cpu} Price: ${this.price}`);
    }
}

const Laptop1 = new Laptop('Dell',2500,'AMD');
Laptop1.show();

