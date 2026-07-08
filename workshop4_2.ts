export{}
class Rectangle{
    constructor(public width: number, public height: number){}
    getArea(): number{
        return this.height*this.width
    }
    getPerimeter(): number{
        return (this.height+this.width)*2
    }
}

const a1 = new Rectangle(5,10);
console.log(a1.getArea());
console.log(a1.getPerimeter());