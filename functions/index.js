const functions = require("firebase-functions");

const app = require("express")();
const FBAuth =require("./util/fbAuth");

const cors = require('cors');
app.use(cors());

const {getAllScreams,postOneScream,getScream,commentOnScream,likeScream,unlikeScream,deleteScream} = require("./handlers/screams");
const { signup, login,uploadImage,addUserDetails,getAuthenticatedUser } = require("./handlers/users");




;
//scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
// add new comment 
app.post('/scream/:screamId/comment',FBAuth,commentOnScream);
// delete scream
app.delete('/scream/:screamId',FBAuth,deleteScream);
// like scream
app.get('/scream/:screamId/like',FBAuth,likeScream);
// unlike scream
app.get('/scream/:screamId/unlike',FBAuth,unlikeScream);


//users routes
app.post('/signup', signup);
app.post('/login', login);

app.post('/user/image',FBAuth,uploadImage);
app.post('/user',FBAuth,addUserDetails);
app.get('/user',FBAuth,getAuthenticatedUser);








exports.api = functions.https.onRequest(app);
