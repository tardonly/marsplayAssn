const {tableJson} = require('./tables');
const {entityJsonFunction, db, processEntity} = require('./app');

var argument = process.argv[2];
var tableName = process.argv[3];
let key;
if (argument === 'db_create') {
    if (tableName && tableJson[tableName]) {
        db.none(query = tableJson[tableName])
            .then(function () {
                    console.log('Table created successfully')
                }
            ).catch(function (err) {
            console.log('Table cannot created');
            console.log(err);
        })
    } else {
        for (key in tableJson) {
            db.none(query = tableJson[key])
                .then(function () {
                        console.log('Table created successfully')
                    }
                ).catch(function (err) {
                console.log('Table cannot created');
                console.log(err);
            })
        }
    }

}
else if (argument === 'insert_data')
{
    if (tableName && entityJsonFunction[tableName]) {
        processEntity(tableName);
    } else {
        for (key in entityJsonFunction) {
            processEntity(key);
        }
    }
}
