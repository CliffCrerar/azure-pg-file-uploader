const [
    {readFileSync, readdirSync},
    {path, resovle}
] = [require('fs'), require('path')];

const filesPath = path.join(__dirname);