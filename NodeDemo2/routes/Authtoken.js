var authtoken;
module.exports.setAuthtoken = function (_authtoken) {
    authtoken = _authtoken;
}
module.exports.getAuthtoken = function () {
    return authtoken;
}

