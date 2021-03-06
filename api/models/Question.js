/**
 * Question.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema: true,
  attributes: {
    supportingText: {
      type: 'string'
    },

    text: {
      type: 'string'
    },

    image: {
      type: 'string'
    },

    dificulty: {
      type: 'string'
    },

    topic: {
      model: 'Topic'
    },

    alternatives: {
      collection: 'Alterantive'
    }
  }

};
