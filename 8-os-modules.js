
const os = require('os')

// info about current user
const user = os.userInfo()

// method for user uptime in secs

console.log(`the system uptime is ${os.uptime} secs`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)