"use strict";
exports.__esModule = true;
var API_1 = require("./API");
var api = API_1.API.getInstance();
//This will thrown an error.
/* let api2 = new API(); */
console.log(api.get());
