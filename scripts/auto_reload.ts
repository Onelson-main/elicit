
const fs = require('fs');

const doIt = () => {
    fs.rename('./App.js', './temp.js', () => {
        fs.rename('./Appy.js', './App.js', () => {
            console.log('offline')
        })
    })
}

const unDoIt = () => {
    fs.rename('./App.js', './Appy.js', () => {
        fs.rename('./temp.js', './App.js', () => {
            console.log('online')
            setTimeout(() => run(), 60000)
        })
    })
}

const run = () => {
    doIt()
    setTimeout(() => unDoIt(), 500)
}

run()