var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var request = require('request');
var config = require('../config');

router.get('/', function(req, res, next) {
  var url = "https://login.microsoftonline.com/"+ config.tenant +"/oauth2/v2.0/authorize?client_id="+ config.client_id + "&response_type=code&redirect_uri="+ querystring.escape(config.redirect) + "&response_mode=query&scope="+ querystring.escape(config.scopes) +"&p=" + config.policy;
  res.redirect(url);
});

router.get('/code', function(req, res, next){
  var form = {
    "client_id": config.client_id,
    "grant_type": "authorization_code",
    "scope": config.scopes,
    "code": req.query.code,
    "redirect_uri": config.redirect,
    "client_secret": config.client_secret 
  };
  var options = {
    url: "https://login.microsoftonline.com/"+ config.tenant +"/oauth2/v2.0/token?p=" + config.policy,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: form
  };

  request(options, function(err, response, body) {
    if (res && (res.statusCode === 200 || res.statusCode === 201)) {
      res.json({token:JSON.parse(body).access_token});
    }
  });
});

module.exports = router;
