import * as io from 'socket.io-client';

const socket = io('ws://localhost:3000/');

socket.on('data', (data) => {
    console.log(data);
})

export default ((value) => {
    socket.emit('data', {input: value});
});