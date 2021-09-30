const people = require('./triggers/people');
const species = require('./triggers/species');

const createPerson = require("./creates/person");

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  triggers: {
    [people.key]: people,
    [species.key]: species,
  },

  creates: {
    [createPerson.key]: createPerson
  }
};
