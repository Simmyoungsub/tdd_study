import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);
const list = [];

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.end('Hello');
})

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('data', (data) => {
        console.log(`${socket.id} / ${JSON.stringify(data)}`);
        list.push(data);

        io.sockets.emit('data', {'message': 'echo message'});
    });
});

const server = httpServer.listen(3000, () => {
    console.log('server is running on port', server.address().port);
});