const fs = require('fs')

if (process.argv.length < 3) {
    console.log('Usgae: node ' + process.argv[1] + ' FILENAME');
    process.exit(1)
}



let filename = process.argv[2];



function dataGetter(filename) {
    let dataHolder;
    const fileReader = fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            throw err;
        };
        console.log('OK: ' + filename);
        data = data.replace(/<|>/g, ' ');
        data=data.split('/n').join(' ');
        console.log(data)
       dataHolder = data.toString()

    });
    return dataHolder
}

const testValue = dataGetter(filename);
console.log(testValue);