class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    getradiuscircle(){
        console.log(this.radius);
    }
    setradiuscircle(radius){
        this.radius = radius;
    }
    getcolorcircle(){
        return this.color;
    }
    setcolorcircle(color){
        this.color = color

    }
    gettostring(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`
    }
    getarea(){
        return this.radius*this.radius;
    }
    getcircumference(){
        return 2*Math.PI*this.radius;
    }
}

var circledetails = new circle(20,"Black");
console.log(circledetails);
circledetails.getradiuscircle();
circledetails.setradiuscircle();
circledetails.getcolorcircle();
circledetails.setcolorcircle();
circledetails.gettostring();
circledetails.getarea();
circledetails.getcircumference();


