var authtoken;
var a = {

  set:  function (_authtoken) {
        authtoken = _authtoken;
    },
  get: function () {
      return authtoken;
}

}
module.exports = a;



