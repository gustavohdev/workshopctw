exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

//200 OK
//201 Created ( some things inside DB)

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};