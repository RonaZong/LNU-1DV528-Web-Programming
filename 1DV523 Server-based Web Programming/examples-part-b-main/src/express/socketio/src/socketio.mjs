import { Server } from 'socket.io'

let io = null;

/**
 * Create a new server for SocketIO and attach to Express app.
 * 
 * @param {object} app the Express app.
 * @returns {object} the io object fro the socketio imlementation.
 */
export function createServer(server) {
    io = new Server(server)
    return io
}

/**
 * The connection callback to setup a new connection.
 * 
 * @param {object} socket the incoming socket connection.
 */
export function connection(socket) {
    console.log('Connection')

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    socket.disconnect = () => {
        console.log('Disconnect')
    }
    
    socket.error = () => {
        console.error('Error')
    }
}
