//in working dir: in one terminal tab, mongod to start mongo daemon. in second tab, mongo < mongo_play.js to open this file and execute with mongodb.

use farm;

db.animals.insert ( {
  name: "Bob",
  type: "Bear"
});

db.animals.insert ( {
  name: "Fred",
  type: "Fox"
});

db.animals.find({name: "Bob"});

db.dropDatabase();