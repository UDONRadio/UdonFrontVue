import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'

const socket = io('http://localhost:3030')

export const client = feathers()
client.configure(socketio(socket))
client.configure(auth({
  storage: window.localStorage
}))

export const message = client.service('message')
export const emission = client.service('emission')
export const user = client.service('users')
