const path = require('path');


exports.contactus=(req, res, next) => {
    res.sendFile(path.join(__dirname,'..','Views','contact.html'));
};

exports.success = (req, res, next) => {
    console.log(req.body);
    res.send('<h1> "Form successfuly filled"</h1>');
};