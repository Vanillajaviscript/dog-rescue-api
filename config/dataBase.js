const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on("disconnected", () => console.log("MongoDB Disconnected!"));
db.on("connected", () => console.log("MongoDB is Connected!"));
db.on("error", (err) => console.log(err.message + ""));


