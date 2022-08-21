"use strict";
exports.__esModule = true;
exports.API = void 0;
var API = /** @class */ (function () {
    function API() {
        this.endpoint = 'https://www....';
        if (API._instance) {
            console.log("Use getInstance() to use this. API already is initialized.");
            return;
        }
        API._instance = this;
    }
    API.getInstance = function () {
        return this._instance || (this._instance = new API());
    };
    API.prototype.get = function () {
        console.log("This is a get request");
        return 0;
    };
    API.prototype.post = function (data) {
    };
    API.prototype.put = function (data) {
    };
    API.prototype["delete"] = function (data) {
    };
    return API;
}());
exports.API = API;
