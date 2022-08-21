interface Observable{
    suscribe(o: Observer):void;
    unsuscribe(o: Observer):void;
    notify():void;
}

interface Observer{
    update(channelName:string):void; //Todo observador, al recibir la notificacion, recibira el nombre del canal que subio video.
    getName():string; //Todo observador, en su cuenta de registro tendra un nombre.;
}

class Channel implements Observable{
    private suscribers:Observer[] = [];
    private lastVideoPosted: string = '';
    private channelName:string = '';

    constructor(channelName: string){
        this.channelName = channelName;
    }

   
    suscribe(o: Observer) {
        this.suscribers.push(o);
    }

    unsuscribe(o: Observer){{
        this.suscribers = this.suscribers.filter((e: Observer) => e!==o)
    }}

    notify() {
        this.suscribers.forEach((suscriber) =>{
            console.log("Se ha enviado la notificacion al suscriptor: ", suscriber.getName());
            suscriber.update(this.channelName)
        });
    }

    addNewVideo(title: string){
        this.lastVideoPosted = title;
        this.notify();
    }

    lastVideoTitle(){
        return this.lastVideoPosted;
    }

    getName(){
        return this.channelName;
    }
}

class Suscriber implements Observer{
    private observable:Observable;
    private name: string;

    constructor(observable: Observable, name: string){
        this.observable = observable;
        this.name = name;
    }

    update(channelName:string){
        console.log(`Hey ${this.name}, tu canal favorito ${channelName} ha subido un video y se titula: ${(this.observable as Channel).lastVideoTitle()}`);
    }

    getName(){
        return this.name;
    }

}

let channel = new Channel('tomihq');
let suscribers:Suscriber[] = [new Suscriber(channel, 'Tomas'), new Suscriber(channel, 'Gonzalo') ]

suscribers.forEach((suscriber)=>{
    channel.suscribe(suscriber);
})

channel.addNewVideo('This is a test')