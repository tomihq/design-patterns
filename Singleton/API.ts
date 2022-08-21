export class API{
    private static _instance:API;
    private endpoint:string = 'https://www....';

    private constructor(){
        if(API._instance){
            console.log("Use getInstance() to use this. API already is initialized.");
            return;
        }
        API._instance = this;
    }

    static getInstance(){
        return this._instance || (this._instance = new API());
    }


    get():number{
        console.log("This is a get request");
        return 0;
       
    }

    post(data: Object){

    }

    put(data: Object){
       

    }

    delete(data: Object){

    }

   
}

