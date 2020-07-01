class  Polygon{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
}
class Rectangle extends Polygon {
    constructor(width, height){
        super(width, height);
        this._color='';
    }
    get area(){
        console.log(this.width * this.height)
        return this.width * this.height;}
    get color(){return this._color;}
    set color(value){this._color=value;}
}

class Square extends Rectangle{
    constructor(side) {
        super(side, side);
        this._color = '';
    }
    get area(){return super.area}
    get color(){return this._color}
    set color(value){this._color = value}
}

let r1 = new Rectangle(2,3);
console.log('area='+r1.area);

r1.color='red';
console.log('color='+r1.color);


let s1= new Square(10);

console.log('square side= '+ s1.side);

console.log('square area='+ s1.area);
