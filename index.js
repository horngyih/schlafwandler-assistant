const _express = require("express");
const app = _express();
const args = process.argv.slice(2);

const defaultPort = process.env.PORT || 3000;

const port = (args.length>0)?parseInt(args[0])||defaultPort : defaultPort;

app.use( _express.static("public") );

app.get("/fb/auth", (req, res)=>{
    res.send("ACK");
});

app.listen( port, ()=> console.log(`Listening on port ${port}`) );
