require('dotenv').config();
// const handleEvents = require('./handlers')
const client = require('./db');
let promiseArray = [];
let self = this;

const connectedClient = client.connect();

function addToPromiseArray(newPromise) {
    console.log(newPromise);
    
    promiseArray = [...promiseArray,newPromise]
}
addToPromiseArray = addToPromiseArray.bind(this);
connectedClient.then(()=>{

    // handleEvents.call(this,connectedClient);

    const result = client.query('select CURRENT_TIMESTAMP');

    console.log(result);

    addToPromiseArray(result);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Array.push(result);
})


connectedClient.catch(err=>{
    console.error(error);
})

connectedClient.finally(()=>{
    Promise.all(promiseArray).then(resolvedPromises=>{

        console.log(resolvedPromises);
        // client.end();
    })
    .catch(err=>{
        
        logging(err);
    })
    .finally(()=>client.end());
});
