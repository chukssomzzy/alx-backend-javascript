import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be a Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be a Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Amount and conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
