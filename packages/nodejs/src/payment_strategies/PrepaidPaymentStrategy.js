import BasePaidPaymentStrategy from './BasePaidPaymentStrategy';
import { EncodingUtils } from '../core';

class PrepaidPaymentStrategy extends BasePaidPaymentStrategy {
  /**
   * @param {BaseServiceClient} serviceClient
   * @param {ConcurrencyManager} concurrencyManager
   * @param {number} blockOffset
   * @param {number} callAllowance
   */
  constructor(serviceClient, concurrencyManager, blockOffset = 240, callAllowance = 1) {
    super(serviceClient, blockOffset, callAllowance);
    this._encodingUtils = new EncodingUtils();
    this._concurrencyManager = concurrencyManager;
  }

  /**
   * @returns {Promise<[{'snet-payment-type': string}, {'snet-payment-channel-id': string}, {'snet-payment-channel-nonce': string}, {'snet-prepaid-auth-token-bin': *}]>}
   */
  async getPaymentMetadata() {
    const channel = await this._selectChannel();
    const concurrentCallsPrice = this._getPrice();
    const token = await this._concurrencyManager.getToken(channel, concurrentCallsPrice);
    const tokenBytes = this._encodingUtils.utfStringToBytes(token);
    const metadata = [{ 'snet-payment-type': 'prepaid-call' },
      { 'snet-payment-channel-id': `${channel.channelId}` },
      { 'snet-payment-channel-nonce': `${channel.state.nonce}` },
      { 'snet-prepaid-auth-token-bin': tokenBytes }];
    return metadata;
  }

  /**
   * total price for all the service calls
   * @returns {number}
   * @private
   */
  _getPrice() {
    return this._serviceClient._pricePerServiceCall.toNumber() * this._concurrencyManager.concurrentCalls;
  }
}

export default PrepaidPaymentStrategy;
