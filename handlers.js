


function dataError(error){
    console.error("ERROR")
    console.error(error)
    console.error("ERROR")
}

function connect(ev) {
    console.log(ev)
}

function notice(notice) {
    console.log(notice)
}

function notification(notification) {
    console.log(notification)
}


function drain(draint) {
    console.log(draint)
}


function end(end) {
    console.log(end)
}


module.exports = function handleEvents(client) {
    client.on('error',dataError)
    client.on('connect',connect)
    client.on('notice',notice)
    client.on('notification',notification)
    client.on('drain',drain)
    client.on('end',end)
}