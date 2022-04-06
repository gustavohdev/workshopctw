const controller = require('../controllers/user.controller')
const { auth } = require('../middlewares')

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });


    app.get("/api/test/all", controller.allAccess);

    app.get("/api/test/user", auth.verifyToken, controller.userBoard);

    app.get("/api/test/admin", [auth.verifyToken, auth.isAdmin], controller.adminBoard);
};


//Access-Control-Allow-Origin: https://foo.bar.org
//Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
//Access-Control-Allow-Headers: Content-Type, x-requested-with
//CORS Handling

//next()
// 
