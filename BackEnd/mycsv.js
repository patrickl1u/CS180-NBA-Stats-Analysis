const fs = require('fs');

function loadCsvData(fileName, onNext, onComplete) {
    let headerFields = [], lineBuffer = '';
    const dataPattern = /(?:^|,)("(?:[^"]*)"|[^,]*)/g;
    const lineSpliter = /[\r\n]+/;
    const quotationMark = /"/g;
    const csvFileStream = fs.createReadStream(fileName);

    function processLine(line, idx) {
        if (line === '')
            return;

        if (idx === 0) {
            let headerFieldsRaw = line.split(dataPattern);
            headerFieldsRaw.forEach(value => {
                headerFields.push(value.toLowerCase());
            })
        } else {
            onNext(parseRecord(line));
        }
    }

    function parseRecord(line) {
        const record = {};
        line.split(dataPattern).forEach(function (dataValue, dataIdx) {
            if (headerFields[dataIdx] !== '') {
                record[headerFields[dataIdx]] = dataValue.replace(quotationMark, '');
            }
        })
        return record;
    }

    csvFileStream.on('data', function (data) {
        lineBuffer += data.toString();
        const allLinesArray = lineBuffer.split(lineSpliter);
        allLinesArray.forEach(function (line, idx) {
            processLine(line, idx);
        });
        lineBuffer = allLinesArray[allLinesArray.length - 1];
    });

    csvFileStream.on('end', function () {
        processLine(lineBuffer, 1);
        if (onComplete) {
            onComplete();
        }
    });
}

module.exports = loadCsvData;