const dotenv = require("dotenv");
dotenv.config(); // ESDAN CHIQARMANG !!!!!!!!!

const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString = process.env.MONGO_URL;

mongodb.connect(connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR on connecting MongoDB");
    else {
        console.log("Mongodb connected successfully");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
let PORT = process.env.PORT || 3003;
server.listen(PORT, function() {
    console.log(`This server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }
}
);