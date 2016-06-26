var request = require('superagent');

module.exports = {

    //returns a new user in an error first callback function
    getNewUser: function(cb) {
        request
            .get('https://randomuser.me/api/')
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err) {
                    return cb(err);
                } else {
                    cb(null, res);
                }
                // Calling the end function will send the request
            });
    }

};
