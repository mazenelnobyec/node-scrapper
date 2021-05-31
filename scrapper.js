const fs = require('fs')

if (process.argv.length < 3) {
    console.log('Usgae: node ' + process.argv[1] + ' FILENAME');
    process.exit(1)
}



let filename = process.argv[2];



function dataGetter(filename) {
    /*fs.readFileSync(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
            throw err;
        };
        console.log('OK: ' + filename);
        data = data.replace(/<[^>]*|\r\n/g, ' ');
        data=data.split('> >');
        console.log(data)

    });*/
    let data = fs.readFileSync(filename, 'utf8')
    data = data.replace(/<[^>]*|\r\n/g, ' ');
    data = data.split('> >');

    return data
}


const testValue = dataGetter(filename)

let data = Array.from(testValue);

data = data.filter((val, index) => index % 2 != 0)
data = data.splice(2)
let countryData=[];

function dataIterator(data,countryData) {
    let obj;
    for (let index = 0; index < data.length; index=index +2) {
         obj = {
            reigon: data[index],
            tzid: data[index+1]
        };  
        //console.log(obj);
        countryData.push(obj)
    }
}
    
dataIterator(data,countryData);
console.log(countryData);
fs.writeFileSync('country.json','utf8')