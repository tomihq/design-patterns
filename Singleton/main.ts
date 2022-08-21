import { API } from "./API";
// You can't use new(), use getInstance instead to create or return an instance. let apiObject = new API();

let api = API.getInstance();
console.log(api.get());
