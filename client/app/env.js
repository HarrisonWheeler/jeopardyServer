export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : 'https://jeoparty-server.herokuapp.com/api/'
