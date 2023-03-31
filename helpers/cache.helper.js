import NodeCache from 'node-cache';

const cache = new NodeCache();

export default cache;

//use
// import cache from '../helpers/cache-helper.js';

// export function getData(req, res) {
//   const data = cache.get('my-data');

//   if (data) {
//     res.send(data);
//   } else {
//     // simulate fetching data from a database
//     const fetchedData = { id: 1, name: 'John Doe' };

//     // set the data in the cache for 60 seconds
//     cache.set('my-data', fetchedData, 60);

//     res.send(fetchedData);
//   }
// }
