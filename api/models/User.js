/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,
	attributes: {
		name: {
			type: 'string',
			required: true
		},
		email: {
			type: 'string',
			email: true,
			required: true,
			unique: true
		},
		encryptedPassword: {
			type: 'string',
      required: true
		}
	}

};
