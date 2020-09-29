const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema
} = graphql;

let users = [
    {
        "firstName": "Wendy",
        "lastName": "Legros",
        "id": "ckf593hkb0000hl10r1o4itdf",
        "email": "Raphaelle.Medhurst55@gmail.com"
      },
      {
        "firstName": "Colleen",
        "lastName": "Kulas",
        "id": "ckf593hkc0001hl10oar55xcz",
        "email": "Helene_Sauer89@yahoo.com"
      },
      {
        "firstName": "Jarod",
        "lastName": "Pouros",
        "id": "ckf593hkc0002hl10ualbybm0",
        "email": "Yessenia.Deckow8@hotmail.com"
      },
      {
        "firstName": "Samson",
        "lastName": "Willms",
        "id": "ckf593hkc0003hl10k5kas8ud",
        "email": "Trudie59@gmail.com"
      },
      {
        "firstName": "Tobin",
        "lastName": "Effertz",
        "id": "ckf593hkc0004hl101ys1jop7",
        "email": "Loma82@yahoo.com"
      },
      {
        "firstName": "Leopoldo",
        "lastName": "Hermiston",
        "id": "ckf593hkc0005hl10n8x6t6gc",
        "email": "Rocky.Beer@yahoo.com"
      },
      {
        "firstName": "Isaiah",
        "lastName": "Stanton",
        "id": "ckf593hkc0006hl10mclnf53v",
        "email": "Carlie.Oberbrunner43@yahoo.com"
      },
      {
        "firstName": "Marilie",
        "lastName": "Nienow",
        "id": "ckf593hkc0007hl10lpiaj2oa",
        "email": "Erna18@hotmail.com"
      },
      {
        "firstName": "Mertie",
        "lastName": "Wilkinson",
        "id": "ckf593hki0008hl10rt6vtfev",
        "email": "Lincoln_Stokes90@hotmail.com"
      },
      {
        "firstName": "Kane",
        "lastName": "Ledner",
        "id": "ckf593hki0009hl10vqzmd7uu",
        "email": "Ellsworth24@yahoo.com"
      },
      {
        "firstName": "Aiden",
        "lastName": "Hermann",
        "id": "ckf593hki000ahl10fphobprj",
        "email": "Isai.Koepp@gmail.com"
      },
      {
        "firstName": "Mya",
        "lastName": "Schinner",
        "id": "ckf593hki000bhl10633b74j7",
        "email": "Bernadette_Mertz@yahoo.com"
      },
      {
        "firstName": "Annabel",
        "lastName": "Bartoletti",
        "id": "ckf593hki000chl10ojhrs6k3",
        "email": "Elian_Buckridge@hotmail.com"
      },
      {
        "firstName": "Enrique",
        "lastName": "Ritchie",
        "id": "ckf593hki000dhl1026j8pofw",
        "email": "Destiney_Schneider73@yahoo.com"
      },
      {
        "firstName": "Scotty",
        "lastName": "Kemmer",
        "id": "ckf593hki000ehl102fyse23l",
        "email": "Violette78@hotmail.com"
      },
      {
        "firstName": "Jake",
        "lastName": "Hessel",
        "id": "ckf593hki000fhl10y5z9b7bz",
        "email": "Verdie.Watsica@hotmail.com"
      },
      {
        "firstName": "Amie",
        "lastName": "Durgan",
        "id": "ckf593hki000ghl10idbk1wp9",
        "email": "Demarco47@hotmail.com"
      },
      {
        "firstName": "Mireille",
        "lastName": "Shields",
        "id": "ckf593hki000hhl10gmpzm04b",
        "email": "Ali19@hotmail.com"
      },
      {
        "firstName": "Keely",
        "lastName": "Gleichner",
        "id": "ckf593hki000ihl101zlw0xw8",
        "email": "Krista.Reilly@hotmail.com"
      },
      {
        "firstName": "Jovanny",
        "lastName": "Considine",
        "id": "ckf593hki000jhl10w1s5jr8y",
        "email": "Carey_Armstrong@yahoo.com"
      },
      {
        "firstName": "Elmore",
        "lastName": "Krajcik",
        "id": "ckf593hki000khl10bboclzz1",
        "email": "Yasmin_Lynch@gmail.com"
      },
      {
        "firstName": "Lucile",
        "lastName": "Labadie",
        "id": "ckf593hki000lhl1033phdkyd",
        "email": "Laila_Wiza@hotmail.com"
      },
      {
        "firstName": "Maye",
        "lastName": "Anderson",
        "id": "ckf593hki000mhl10gxxxh4dx",
        "email": "Eden47@hotmail.com"
      },
      {
        "firstName": "Cecil",
        "lastName": "Kerluke",
        "id": "ckf593hki000nhl10kqq6lvwo",
        "email": "Augustus_Bruen89@yahoo.com"
      },
      {
        "firstName": "Cristal",
        "lastName": "Lang",
        "id": "ckf593hki000ohl109t3c0vdi",
        "email": "Carmine_Purdy61@yahoo.com"
    }
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        id: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return users.find(user => user.id == args.id)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})