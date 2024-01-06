export function hasAbstractFunc(derivedClass, baseClass, methodName) {
  if (derivedClass.prototype[methodName] === undefined
        || derivedClass.prototype[methodName] === baseClass.prototype[methodName]) {
    throw new Error(`Class extending Building must override ${methodName}`);
  }
}

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
    if (new.target !== Building) {
      hasAbstractFunc(this.constructor, Building, 'evacuationWaringMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}
