'use strict'
const dataController = require("./controller/data_controller")
const { pathXlsxFile, fileResult, pathFile2Generate, testData2Generate } = require("./exports")

async function main () {
    try {
        await dataController.readXlsx(pathXlsxFile, testData2Generate)
        await dataController.compare(testData2Generate, pathFile2Generate)
        await dataController.generate(testData2Generate, fileResult)
    } catch (err) {
        console.log(err)
    }
}

main()