export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = size;
    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new Error('Size must be a number');
    }
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new Error('Location must be a string');
    }
    this._location = location;
  }

  [Symbol.toPrimitive](primitive) {
    if (primitive === 'string') {
      return this._location;
    }
    return this._size;
  }
}
