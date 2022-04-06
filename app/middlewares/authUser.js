verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    next();
};

isAdmin = (req, res, next) => {
    // this access in a real project would be made inside a Database with authentication
    let token = req.headers["x-access-token"];

    if(token != 2){
        return res.status(403).send({ message: "You are not a admin" });
    }

    next()
};

const auth = {
    verifyToken,
    isAdmin,
};

module.exports = auth;
