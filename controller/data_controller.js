'use strict'
const { readXlsxFile, sort, load, save, append, truncate } = require("../exports")

async function readXlsx (pathXlsxFile, path2SaveResult) {
    const currentContent = []
    try {
        await readXlsxFile(pathXlsxFile, { getSheets: true }).then(async (sheets) => {
            for (let item of sheets) {
                console.log(`--> Reading XLSX ${item.name}...`)
                await readXlsxFile(pathXlsxFile, { sheet: item.name }).then(async (rows) => {
                    for (let item of rows) {
                        if (item[0] != null && item[0] != undefined && item[1] != null && item[1] != undefined) {
                            if (item[2] != null && item[2] != undefined) {
                                currentContent.push([item[0], item[2]])
                            } else {
                                currentContent.push([item[0], item[1]])
                            }
                        }
                    }
                })
            }
            await save(path2SaveResult, currentContent)
        })
    } catch (err) {
        console.log(err.msg)
    }
}
async function compare (testData2Generate, pathFile2Generate) {
    try {
        let tmp = await load(testData2Generate)
        const currentContentTestSorted = sort(tmp)
        tmp = await load(pathFile2Generate)
        const currentContentOriginSorted = sort(tmp)
        if (JSON.stringify(currentContentOriginSorted) == JSON.stringify(currentContentTestSorted)) {
            console.log("--> Files Compared!")
        } else {
            throw new Error("--> Error: Files are Different!!")
        }
    } catch (err) {
        console.log(err)
    }
}
async function generate (path2Generate, path2SaveResult) {
    try {
        const data2Generate = await load(path2Generate)
        await truncate(path2SaveResult)
        await data2Generate.forEach(async item => {
            const generatedSQL = `UPDATE mod_os as a, eng_agenda_os as b SET a.data_execucao = "${item[1]}", b.start = "${item[1]}" WHERE a.id_os = ${item[0]} AND b.os = ${item[0]};\n`
            await append(path2SaveResult, generatedSQL)
        })
        console.log(`--> SQL Updates Generated!`)
    } catch (err) {
        console.log(err.msg)
    }
}

module.exports = { generate, readXlsx, compare }