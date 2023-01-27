module.exports = {
    modelBaseDirectory: 'app_server/database/models', //model directory name
    models: ['*.js', '!db.js'], //model matcher
    data: 'data', //data directory
    db: 'mongod://localhost:3000/travlr' //db connection url
};