// handling async errors when using callbacks
// import { readFile } from 'fs';	

// readFile(new URL('app.mjs', import.meta.url), 'utf8', (err, data) => {
//     if (err) {
//         // handle error
//         console.error(err);
//         throw err
//     } else {        
//         // console.log(data);
//     }
// })

// handling promises errors
// use the .catch() method
// import { readFile } from 'fs/promises';
// const result = readFile(new URL('app.ms', import.meta.url), 'utf8')
// .catch(e => {
//     console.error(e);
//     // throw e
// })



// handling synchronous errors or async await
// import { readFile } from 'fs/promises';	

// try {
//     const result = await readFile(new URL('app.ms', import.meta.url), 'utf8');
// } catch (e) {
//     // handle error
//     console.error(e)
//     throw e
//     console.log('Hello')
// }

//  Catch All errors
import { readFile } from 'fs/promises';

process.on('uncaughtException', (e) => {
    console.log(e)
})

const result = awaitcd readFile(new URL('app.ms', import.meta.url), 'utf8')
console.log('Hello')