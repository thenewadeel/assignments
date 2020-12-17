console.log("start");
class GeometricObject {
  constructor(_color, _filled, _dateCreated) {
    this.color = _color || "blue";
    // variableName=parameter || default value in case of no parameter
    // console.log("fill:", _filled);
    this.filled = _filled || false;
    // console.log("fill set to:", this.filled);
    this.dateCreated = _dateCreated || Date();
    console.log("geometric object created", this);
  }
  getColor() {
    return this.color;
  }
  setColor(_color) {
    this.color = _color;
  }
  getFilled() {
    return this.filled;
  }
  setFilled(_filled) {
    this.filled = _filled;
  }
  getDateCreated() {
    return this.dateCreated;
  }
  toString() {}
}
class Rectangle extends GeometricObject {
  constructor(_width, _height, _color, _filled) {
    super(_color, _filled);
    this.width = _width || 1.5;
    this.height = _height || 1;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    // parseFloat converts these numbers to float/ double, otherwise javaScript does string concatenation
    return 2 * (parseFloat(this.width) + parseFloat(this.height));
  }
  toString() {
    let msg = "Rectangle: width = " + this.width + ", height = " + this.height;
    if (this.filled) {
      msg += ", the Rectangle is Filled with " + this.color + " color!";
    }
    return msg;
  }
}

let a = new Rectangle(10, 20, "red", false);
let b;
testFunc = function() {
  console.log("test Func starts");
  let _width = document.getElementById("widthInput").value;
  let _height = document.getElementById("heightInput").value;
  let _color = document.getElementById("colorInput").value;
  let _filled = document.getElementById("filledInput").checked;
  b = new Rectangle(_width, _height, _color, _filled);
  //rect is made, time for output
  let cons = document.getElementById("output");
  let msg = b.toString();
  msg += "<br/>Area:" + b.getArea();
  msg += "<br/>Perimeter:" + b.getPerimeter();
  cons.innerHTML = msg;
};
