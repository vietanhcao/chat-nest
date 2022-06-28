import { io, Socket } from 'socket.io-client';
import { store } from './app/store';

let socket: Socket;

export const initiateSocketConnection = (room: string, token: string) => {
  socket = io((process.env.REACT_APP_API_URL || 'http://localhost:3000') + '/chat', {
    auth: {
      Authorization: token,
    },
  });
  console.log(`Connecting socket...`);
};

export const disconnectSocketAuth = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const listenToMessages = (cb: (msg: any) => any) => {
  if (!socket) return true;
  socket.on('receive_message', (msg: any) => {
    console.log('Websocket event received!');
    return cb(msg);
  });
};
export const emitSendMessage = (content: string) => {
  if (socket) socket.emit('send_message', content);
};
