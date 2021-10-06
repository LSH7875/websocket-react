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
        ws.send("{'type':'Client',data:'서영님짱임'}");
    });
    res.json({'match':'아무것도 아니다'})
})

app.listen(port,()=>{
    console.log(`server port ${port}`
    )
})

let clients =[];


const webSocketServer = new WebSocket.Server({
    port:8080
})

// webSocketServer.on("connection",(ws,req)=>{
//     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     clients.push(ip);
//     console.log(`${ip}가 접속했습니다`);
//     ws.send("{'match':'연결했음'}")
//     ws.on('message',(message)=>{
//         console.log(`received: ${message}`);
//         ws.send("{'match':'메세지 바음여'}")
//         })
//     })

    webSocketServer.on('connection', function connection(ws,req) {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        clients.push(ip);
        console.log(`${ip}가 접속했습니다`);
        ws.send(`{'message':${ip}가 접속했습니다}`)
        ws.on('message', function incoming(data, isBinary) {
            const data1 =JSON.parse(data);
            const {type}=data1;
            switch (type){
                case 'Server':{
                    wss.clients.forEach(client=>{
                        if(client.readyState===ws.OPEN && client._socket._peername.port ==3000){
                            client.send(data1)
                        }
                    })
                }
                case 'Client':{
                    console.log(`received: ${data1}`);
                    data2=data.toString();
                    webSocketServer.clients.forEach(function each(client) {
                    if (client._socket._peername.port !==8080   && client.readyState === WebSocket.OPEN) {
                        console.log(JSON.stringify(data2));
                        client.send(JSON.stringify(data2));
                        }
                    });
                }
            }
        }
        )})