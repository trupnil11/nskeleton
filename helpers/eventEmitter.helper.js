import EventEmitter  from "events";
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
export default  myEmitter;

//controller exameple of use /
//import myEmitter  from "./eventEmitter'"; OR relative path

// // Emit an event
// myEmitter.emit('myEvent', 'some data');

// // Listen for an event
// myEmitter.on('myEvent', (data) => {
//   console.log('Event received with data:', data);
// });
