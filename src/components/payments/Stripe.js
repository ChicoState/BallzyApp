"use strict";

var stripe_url = 'https://api.stripe.com/v1/'
var secret_key = 'sk_test_x5FOlnrvRehtvSq4i4No9Z78'

module.exports.createCardToken = function (CardNo, CardMo, CardYr, CardCvc) {
  var cardDetails = {
    "card[number]": CardNo,
    "card[exp_month]": CardMo,
    "card[exp_year]": CardYr,
    "card[cvc]": CardCvc
  };

  var formBody = [];
  for (var property in cardDetails) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(cardDetails[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch(stripe_url + 'tokens', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + secret_key
    },
    body: formBody
  });
};