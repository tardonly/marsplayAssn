const albums = ' create table album\n' +
    '(\n' +
    '    id      varchar,\n' +
    '    user_id varchar,\n' +
    '    title   varchar\n' +
    ');\n' +
    '\n' +
    'alter table album\n' +
    '    owner to fchhltfc;\n';


const comments = 'create table comments\n' +
    '(\n' +
    '    id      varchar,\n' +
    '    name    varchar,\n' +
    '    email   varchar,\n' +
    '    body    varchar,\n' +
    '    post_id varchar\n' +
    ');\n' +
    '\n' +
    'alter table comments\n' +
    '    owner to fchhltfc;\n' +
    '\n';

const photos = 'create table photo\n' +
    '(\n' +
    '    id            varchar,\n' +
    '    album_id      varchar,\n' +
    '    title         varchar,\n' +
    '    url           varchar,\n' +
    '    thumbnail_url varchar\n' +
    ');\n' +
    '\n' +
    'alter table photo\n' +
    '    owner to fchhltfc;\n' +
    '\n';

const posts = 'create table post\n' +
    '(\n' +
    '    id      varchar,\n' +
    '    user_id varchar,\n' +
    '    title   varchar,\n' +
    '    body    varchar\n' +
    ');\n' +
    '\n' +
    'alter table post\n' +
    '    owner to fchhltfc;';

const todos = 'create table todo\n' +
    '(\n' +
    '    id        varchar,\n' +
    '    user_id   varchar,\n' +
    '    title     varchar,\n' +
    '    completed varchar\n' +
    ');\n' +
    '\n' +
    'alter table todo\n' +
    '    owner to fchhltfc;\n' +
    '\n';
const users = 'create table users\n' +
    '(\n' +
    '    id       integer,\n' +
    '    username varchar,\n' +
    '    email    varchar,\n' +
    '    website  varchar,\n' +
    '    phone    varchar,\n' +
    '    lat      varchar,\n' +
    '    lng      varchar,\n' +
    '    street   varchar,\n' +
    '    suite    varchar,\n' +
    '    city     varchar,\n' +
    '    zipcode  varchar,\n' +
    '    name     varchar\n' +
    ');\n' +
    '\n' +
    'alter table users\n' +
    '    owner to fchhltfc;\n' +
    '\n';

exports.tableJson = {
    albums: albums,
    comments: comments,
    photos: photos,
    posts: posts,
    todos: todos,
    users: users
};
