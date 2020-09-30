const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

//allow cross-origin requests i.e.linking localhost 3000 FE to localhost 5000 BE
app.use(cors());

app.listen(5000,() => {
    console.log('Listening for requests on port 5000');
});