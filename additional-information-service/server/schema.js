const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers.js');

// const typeDefs = `
//   type Home {
//     _id: String!
//     address: String!
//     city: String!
//     zestimate: [Int]!
//     beds: Int!
//     baths: Float!
//     sqFt: Int!
//     status: String!
//     taxAssessment: Float!
//   }
//
//   type Query {
//     allHouses: [Home]
//     getSome(num: [Int]!): [Home]
//   }
//
// `;

const typeDefs = `
  type Home {
    propertyid: Int!
    address: String!
    baths: Float!
    beds: Int!
    city: String!   
    sqFt: Int!
    status: String!
    zip: Int!
  }

  type Query {
    allHouses: [Home]
    getSome(num: [Int]!): [Home]
  }
  
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
