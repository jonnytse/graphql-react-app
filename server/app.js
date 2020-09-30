const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

//allow cross-origin requests i.e.linking localhost 3000 FE to localhost 5000 BE
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(5000,() => {
    console.log('Listening for requests on port 5000');
});

