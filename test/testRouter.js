var expect = require('chai').expect;
var request = require('superagent');
var mock = require('superagent-mocker')(request);
var router = require('./../js/router/router.js');
router.request = request;

mock.get('https://randomuser.me/api/', function(req) {
    var multipleUser = singleUserResponse;
    for (var i =0; i< 99; i++){
        multipleUser.results.push(multipleUser.results[0]);
    }
    return multipleUser;
});

describe('it returns a friend', function() {
    it('gets a friend', function(done) {
        this.timeout(0);
        router.getNewUser(function(err, res) {
            if (err) throw err;
            expect(res === );

            expect(res.results[0].name.last === "faure");
            done();
        });

    });
})

var singleUserResponse = {
    "results": [{
        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "eléa",
            "last": "faure"
        },
        "location": {
            "street": "8266 rue de la barre",
            "city": "montreuil",
            "state": "meurthe-et-moselle",
            "postcode": 81771
        },
        "email": "eléa.faure@example.com",
        "login": {
            "username": "smallladybug297",
            "password": "aisan",
            "salt": "cvaNunsr",
            "md5": "0410d6ee57e6450ed017795d98229897",
            "sha1": "9e98e5cb4f31791f04edf2429d7678a0c82041f4",
            "sha256": "47387cf5cc157cf28ae6bab04f93bd5879ffceb0891f02b0314ca91366d16f4c"
        },
        "registered": 1390417341,
        "dob": 385818605,
        "phone": "03-58-17-94-61",
        "cell": "06-48-16-58-77",
        "id": {
            "name": "INSEE",
            "value": "282299736471 26"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/83.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
        },
        "nat": "FR"
    }],
    "info": {
        "seed": "7333ef00dde93907",
        "results": 1,
        "page": 1,
        "version": "1.0"
    }
};
