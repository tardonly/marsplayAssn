const axios = require('axios');
const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
};

const pgp = require('pg-promise')(initOptions);

const cn = {
    host: 'satao.db.elephantsql.com', // 'localhost' node ap   is the default;
    port: 5432, // 5432 is the default;
    database: 'fchhltfc',
    user: 'fchhltfc',
    password: 'vcyFNRGGWwzAIXdQPiTMXcEXz5nYAYLV'
};

const db = pgp(cn);


exports.entityJsonFunction = {
    albums: 'add_album',
    comments: 'add_comment',
    photos: 'add_photo',
    posts: 'add_post',
    todos: 'add_todo',
    users: 'add_user'
};

const getEntity = function (entity) {
    return axios.get(`https://jsonplaceholder.typicode.com/${entity}`)
};
const setEntity = function (function_name, curr, total, entityData) {
    if (curr === total + 1) {
        return
    }
    return db.any(`SELECT ${function_name} ($1)`, [entityData[curr - 1]])
        .then(function (err) {
            return setEntity(function_name, curr + 1, total, entityData)
        }).catch(function () {
                return setEntity(function_name, curr + 1, total, entityData)
            }
        )
};

exports.processEntity = function (entity) {
    getEntity(entity)
        .then(function (res) {
            setEntity(`${entityJsonFunction[entity]}`, 1, res.data.length, res.data)
        })
};
exports.db=db;


