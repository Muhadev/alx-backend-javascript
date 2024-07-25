// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    consoleSpy.restore();
  });
});
