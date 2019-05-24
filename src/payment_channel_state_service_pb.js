/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.escrow.ChannelStateReply', null, global);
goog.exportSymbol('proto.escrow.ChannelStateRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.escrow.ChannelStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.escrow.ChannelStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.escrow.ChannelStateRequest.displayName = 'proto.escrow.ChannelStateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.escrow.ChannelStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.escrow.ChannelStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.escrow.ChannelStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.escrow.ChannelStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelId: msg.getChannelId_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.escrow.ChannelStateRequest}
 */
proto.escrow.ChannelStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.escrow.ChannelStateRequest;
  return proto.escrow.ChannelStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.escrow.ChannelStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.escrow.ChannelStateRequest}
 */
proto.escrow.ChannelStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChannelId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.escrow.ChannelStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.escrow.ChannelStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.escrow.ChannelStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes channel_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.escrow.ChannelStateRequest.prototype.getChannelId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes channel_id = 1;
 * This is a type-conversion wrapper around `getChannelId()`
 * @return {string}
 */
proto.escrow.ChannelStateRequest.prototype.getChannelId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChannelId()));
};


/**
 * optional bytes channel_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChannelId()`
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateRequest.prototype.getChannelId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChannelId()));
};


/** @param {!(string|Uint8Array)} value */
proto.escrow.ChannelStateRequest.prototype.setChannelId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.escrow.ChannelStateRequest.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.escrow.ChannelStateRequest.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateRequest.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.escrow.ChannelStateRequest.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.escrow.ChannelStateReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.escrow.ChannelStateReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.escrow.ChannelStateReply.displayName = 'proto.escrow.ChannelStateReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.escrow.ChannelStateReply.prototype.toObject = function(opt_includeInstance) {
  return proto.escrow.ChannelStateReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.escrow.ChannelStateReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.escrow.ChannelStateReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentNonce: msg.getCurrentNonce_asB64(),
    currentSignedAmount: msg.getCurrentSignedAmount_asB64(),
    currentSignature: msg.getCurrentSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.escrow.ChannelStateReply}
 */
proto.escrow.ChannelStateReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.escrow.ChannelStateReply;
  return proto.escrow.ChannelStateReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.escrow.ChannelStateReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.escrow.ChannelStateReply}
 */
proto.escrow.ChannelStateReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCurrentNonce(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCurrentSignedAmount(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCurrentSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.escrow.ChannelStateReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.escrow.ChannelStateReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.escrow.ChannelStateReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCurrentSignedAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCurrentSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes current_nonce = 1;
 * @return {!(string|Uint8Array)}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes current_nonce = 1;
 * This is a type-conversion wrapper around `getCurrentNonce()`
 * @return {string}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCurrentNonce()));
};


/**
 * optional bytes current_nonce = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCurrentNonce()`
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCurrentNonce()));
};


/** @param {!(string|Uint8Array)} value */
proto.escrow.ChannelStateReply.prototype.setCurrentNonce = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes current_signed_amount = 2;
 * @return {!(string|Uint8Array)}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignedAmount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes current_signed_amount = 2;
 * This is a type-conversion wrapper around `getCurrentSignedAmount()`
 * @return {string}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignedAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCurrentSignedAmount()));
};


/**
 * optional bytes current_signed_amount = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCurrentSignedAmount()`
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignedAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCurrentSignedAmount()));
};


/** @param {!(string|Uint8Array)} value */
proto.escrow.ChannelStateReply.prototype.setCurrentSignedAmount = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes current_signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes current_signature = 3;
 * This is a type-conversion wrapper around `getCurrentSignature()`
 * @return {string}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCurrentSignature()));
};


/**
 * optional bytes current_signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCurrentSignature()`
 * @return {!Uint8Array}
 */
proto.escrow.ChannelStateReply.prototype.getCurrentSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCurrentSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.escrow.ChannelStateReply.prototype.setCurrentSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


goog.object.extend(exports, proto.escrow);
