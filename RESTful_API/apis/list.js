'use strict';

// /list?limit=10&page=1
module.exports = function(Router) {
    Router.get('/list', function(req, res, next) {
        var query = req.query;
        var Work = global.dbHandel.getModel('work');
        var limit = Number(query.limit) || 10;
        var page = Number(query.page) || 1;
        Work.find({}).limit(limit).skip((page - 1) * limit).exec(function(err, docs) {
            if (err) {
                res.send(err);
            } else {
                res.send(docs)
            }
        })
    })
    return Router;
}