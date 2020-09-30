const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLList
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

let posts = [
    {
        "id": "ckfoeh8wn0h0jhl10b6ezfvlc",
        "title": "Moldova optical action-items",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wn0h0khl10lsox7hjj",
        "title": "transmitting utilisation",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wn0h0lhl10fprivznv",
        "title": "Director",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wn0h0mhl109w2ntbqo",
        "title": "Loop",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0nhl10lcdj2qm9",
        "title": "Texas override",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0ohl104mx4akyf",
        "title": "Portugal benchmark distributed",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0phl10pcf7rxca",
        "title": "Secured copy Michigan",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0qhl10bqc98ug4",
        "title": "olive Chips",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0rhl10huw21i1x",
        "title": "Venezuela",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0shl10uigcyd7g",
        "title": "Director",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0thl10tjmiizyo",
        "title": "Tactics Facilitator Avon",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wo0h0uhl106vb15zy3",
        "title": "grey Central wireless",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h0vhl10scmmdztp",
        "title": "withdrawal matrices Customer",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h0whl10u0t1ntlb",
        "title": "Ergonomic programming Horizontal",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h0xhl107ze3e32j",
        "title": "Metal",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h0yhl106f7469pn",
        "title": "redundant Croatian Kuna",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h0zhl10tt77twg1",
        "title": "Jewelery",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wp0h10hl10g9ete3jz",
        "title": "multi-tasking navigating",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wq0h11hl104y3pgupn",
        "title": "copying",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wq0h12hl101sr3rrqa",
        "title": "Bedfordshire Bahamas",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wq0h13hl10redigcxk",
        "title": "Response discrete open-source",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wq0h14hl107abt45bg",
        "title": "Row",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wq0h15hl10hz6wf0x9",
        "title": "Industrial hard drive Wooden",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wq0h16hl1026gbv672",
        "title": "moderator",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wq0h17hl10uv9nj6q0",
        "title": "infrastructures magnetic",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wq0h18hl10ptvxho1i",
        "title": "Avon Concrete Drive",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wq0h19hl10vzapkt8h",
        "title": "streamline",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1ahl10pwc21sa0",
        "title": "Assurance Rustic",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1bhl10w1qcj9jd",
        "title": "Dynamic",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1chl10wf3v6t5p",
        "title": "Centers Credit Card Account",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1dhl10qbc31hqr",
        "title": "content-based navigate",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1ehl1025vikm7k",
        "title": "Gorgeous matrix Regional",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1fhl102p2prezm",
        "title": "ROI compress",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wv0h1ghl103kiovlk2",
        "title": "Rubber out-of-the-box",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1hhl10e0ofh2wh",
        "title": "withdrawal withdrawal Rustic Soft Bike",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1ihl10hfr3rp1j",
        "title": "Dam",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1jhl10wo4xa3j4",
        "title": "streamline",
        "author": {
          "firstName": "Colleen",
          "lastName": "Kulas",
          "email": "Helene_Sauer89@yahoo.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1khl10d0z05xdp",
        "title": "motivating",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1lhl10waj1dczh",
        "title": "generating",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1mhl100oiogu4j",
        "title": "Dynamic",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1nhl10491gk9ir",
        "title": "Western Sahara B2C",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1ohl10f1yu952z",
        "title": "Mission Dynamic Assistant",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1phl106j4u7r4u",
        "title": "Communications",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1qhl10rmwt2vau",
        "title": "quantify",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8ww0h1rhl1045u8dnkk",
        "title": "Technician transmitter bandwidth",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wx0h1shl10ytdtrk6z",
        "title": "XML radical transitional",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wx0h1thl10rjuajex1",
        "title": "bottom-line Gorgeous Soft Salad",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      },
      {
        "id": "ckfoeh8wx0h1uhl10ohnoyr19",
        "title": "integrated innovative",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wx0h1vhl1068ql03vz",
        "title": "Plastic Awesome synergies",
        "author": {
          "firstName": "Jarod",
          "lastName": "Pouros",
          "email": "Yessenia.Deckow8@hotmail.com"
        }
      },
      {
        "id": "ckfoeh8wx0h1whl10ag6prnfo",
        "title": "reboot",
        "author": {
          "firstName": "Wendy",
          "lastName": "Legros",
          "email": "Raphaelle.Medhurst55@gmail.com"
        }
      }
];


//***** Defining Object Types
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        id: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return posts.filter(post => post.author.email == parent.email)
            }
        }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        author: {
            type: UserType,
            resolve(parent, args){
                return users.find(user => parent.author.email == user.email);
            }
        }
    })
});


//***** Creating the RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        User: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return users.find(user => user.id == args.id)
            }
        },
        Post: {
            type: PostType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                return posts.find(post => post.id == args.id)
            }
        },
        allUsers: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users
            }
        },
        allPosts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return posts
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})