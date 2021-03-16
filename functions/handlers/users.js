const { db, admin } = require('../util/admin');
const config =require('../util/config.js');

const firebase= require('firebase');

const{validateSignupData,validateloginData, reduceUserDetails}=require('../util/validators');
const { user } = require('firebase-functions/lib/providers/auth');
firebase.initializeApp(config);
exports.signup=(req, res) => {
    const newuser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        nom: req.body.nom,
        prenom: req.body.prenom,
        formation: req.body.formation,
        
    };
    const {valid,errors} =validateSignupData(newuser); 
    if(!valid) return res.status(400).json(errors);

    const noImg = "no-img.png";
   
    let token, userId;
    db.doc(`/users/${newuser.email}`).get()
        .then((doc) => {
            if (doc.exists) {
                return res.status(400).json({ email: 'this email is already taken' });
            }
            else {
                return firebase.auth().createUserWithEmailAndPassword(newuser.email, newuser.password)
            }
        })
        .then((data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((Idtoken) => {
            token = Idtoken;
            const userCredentials = {
                email: newuser.email,
                nom: newuser.nom,
                prenom: newuser.prenom,
                formation: newuser.formation,
                createdat: new Date().toISOString(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
                userId

            }
            
            return db.doc(`/users/${newuser.email}`).set(userCredentials);
           
        })
        .then(() => {
            return res.status(201).json({ token })
        })
        .catch(err => {
            console.error(err);
            if (err.code === "auth/email-already-in-use") {
                return res.status(400).json({ email: 'this email is already taken' });
            } else {
                return res.status(500).json({ error: err.code });
            }

    })
}
exports.login=(req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    const {valid,errors} =validateloginData(user); 
    if(!valid) return res.status(400).json(errors);
   
    
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.json({ token });
        })
        .catch((err) => {
            console.error(err);
            return res.
                status(403).json({ general: 'wrong credentials,please try again' })
            }
           
        );        

        };
        exports.addUserDetails = (req, res) => {
            let userDetails = reduceUserDetails(req.body);
          
            db.doc(`/users/${req.user.email}`)
              .update(userDetails)
              .then(() => {
                return res.json({ message: "Details added successfully" });
              })
              .catch((err) => {
                console.error(err);
                return res.status(500).json({ error: err.code });
              });
          };
          exports.getAuthenticatedUser = (req, res) => {
            let userData = {};
            db.doc(`/users/${req.user.email}`)
              .get()
              .then((doc) => {
                if (doc.exists) {
                  userData.credentials = doc.data();
                  return db
                    .collection("likes")
                    .orderBy('createdAt', 'desc')
                    .where("email", "==", req.user.email)
                    .get();
                }
              })
              .then((data) => {
                userData.likes = [];
                data.forEach((doc) => {
                  userData.likes.push(doc.data());
                  })
                  return res.json(userData);
              })
              .catch((err) => {
                console.error(err);
                return res.status(500).json({ error: err.code });
              });

              }
              exports.uploadImage = (req, res) => {
                const BusBoy = require("busboy");
                const path = require("path");
                const os = require("os");
                const fs = require("fs");
              
                const busboy = new BusBoy({ headers: req.headers });
              
                let imageToBeUploaded = {};
                let imageFileName;
                // String for image token
                
              
                busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
                  console.log(fieldname, file, filename, encoding, mimetype);
                  if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
                    return res.status(400).json({ error: "Wrong file type submitted" });
                  }
                  // my.image.png => ['my', 'image', 'png']
                  const imageExtension = filename.split(".")[filename.split(".").length - 1];
                  // 32756238461724837.png
                  imageFileName = `${Math.round(
                    Math.random() * 1000000000000
                  )}.${imageExtension}`;
                  const filepath = path.join(os.tmpdir(), imageFileName);
                  imageToBeUploaded = { filepath, mimetype };
                  file.pipe(fs.createWriteStream(filepath));
                });
                busboy.on("finish", () => {
                  admin
                    .storage()
                    .bucket()
                    .upload(imageToBeUploaded.filepath, {
                      resumable: false,
                      metadata: {
                        metadata: {
                          contentType: imageToBeUploaded.mimetype,
                         
                         
                        },
                      },
                    })
                    .then(() => {
                      // Append token to url
                      const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
                      return db.doc(`/users/${req.user.email}`).update({ imageUrl });
                    })
                    .then(() => {
                      return res.json({ message: "image uploaded successfully" });
                    })
                    .catch((err) => {
                      console.error(err);
                      return res.status(500).json({ error: "something went wrong" });
                    });
                });
                busboy.end(req.rawBody);
              };
