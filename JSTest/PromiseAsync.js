/*
* Author : Peter
* Date: Aug 4 2020
* Content:
*   Using Promise and Async function
*/

const fetch = require('node-fetch');
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(todo => {
        throw new Error('uh oh');
        return todo;
    })
    .then(todo => console.log('😛', todo.title))
    .catch(err => console.error('😭', err));

console.log('🥪 Synchronous');
