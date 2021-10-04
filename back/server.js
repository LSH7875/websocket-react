const express = require('express');
const app = express();
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const {WebSocketServer} = require('ws');
ws = new WebSocket('ws://localhost:8080');


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    webSocketServer.clients.forEach((ws)=>{
        ws.send("{'match':'locAlhost:3000'}");
    });
    res.json({'match':'아무것도 아니다'})
})

app.listen(port,()=>{
    console.log(`server port ${port}`)
})

let clients =[];


const webSocketServer = new WebSocket.Server({
    port:8080
})
webSocketServer.on("connection",(ws,req)=>{
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    clients.push(ip);
    ws.send("{'match':'연결했음'}")
    ws.on('message',(message)=>{
        console.log(`received: ${message}`);
        ws.send("{'match':'메세지 바음여'}")
        })
    })

