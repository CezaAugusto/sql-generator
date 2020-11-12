'use strict'
const fs = require("fs")
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)
const appendFileAsync = promisify(fs.appendFile)
const truncateAsync = promisify(fs.truncate)

async function load (filePath) {
    try {
        const fileBuffer = await readFileAsync(filePath, 'utf-8')
        return JSON.parse(fileBuffer)
    } catch (err) {
        console.log(err.msg)
    }
}
async function save (filePath, content) {
    const contentString = JSON.stringify(content)
    try {
        return await writeFileAsync(filePath, contentString)
    } catch (err) {
        console.log(err.msg)
    }
}
async function append (filePath, content) {
    try {
        return await appendFileAsync(filePath, content)
    } catch (err) {
        console.log(err.msg)
    }
}
async function truncate (filePath) {
    try {
        truncateAsync(filePath, 0)
    } catch (err) {
        console.log(err.msg)
    }
}

module.exports = { save, append, load, truncate }