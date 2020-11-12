'use strict'
const { sort } = require("./service/sort_data")
const readXlsxFile = require("read-excel-file/node")
const { load, save, append, truncate } = require("./service/content_service")
const fileResult = "./data_sql/file_result.sql"
// const pathXlsxFile = "./tmp/CRONOGRAMA_OS_SHOPPINGS_alterado_bia.xlsx"
// const pathXlsxFile = "./tmp/ordens_servico_datas.xlsx"
const pathFile2Generate = "./content/file_2_generate.json"
const testData2Generate = "./content/test_data_2_generate.json"

module.exports = { fileResult, pathFile2Generate, testData2Generate, pathXlsxFile, readXlsxFile, sort, load, save, append, truncate }