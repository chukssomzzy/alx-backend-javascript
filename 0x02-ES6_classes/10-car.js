export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get motor() {
    return this._brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
