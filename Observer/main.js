class Subject { //Sujeto reutilizable con los métodos necesarios para que cualquiera extienda de este.
    constructor(){
        this.observers = [];
    }

    suscribe(observer){ //Cada Observador se podrá suscribir al Sujeto.
        this.observers.push(observer);
    }

    unsuscribe(observer){ //El observador se desuscribirá del sujeto.
        console.log("Se ha desuscrito un observador");
        this.observers = this.observers.filter((e)=>e!==observer);
    }

    notify(obj){
        this.observers.forEach((observer) =>{
            observer.notify(obj); //Llama al notify del observador que corresponda.
        })
    }

}

class ItemSubject extends Subject { //Es el sujeto que notificará a sus observadores.
    constructor(){
        super(); //Para cuando sea ItemSubject, estamos diciendole al Subject que ItemSubject tendrá un array de observadores.
        this.items = []; //Estado de ItemSubject
    }

    notify(item){  //Clase que ejeuctará el sujeto para notificar a cada uno de sus observadores.
       this.items.push(item);
       super.notify(this); 
    }
}

class ListObserver { //Este observador tendrá como trabajo observar y escuchar las notificaciones que envia cada vez que se agrega un item. Una vez recibida, hará su trabajo que es renderizarlo en un elemento div.
    constructor(tag){
        this.tag = tag;
    }

    notify(subject){
        console.log("Observador Lista ha sido notificada");
        this.tag.innerHTML = '';
        subject.items.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = `<p> ${item.description} <b> ${item.amount} </b> </p>`;
            this.tag.appendChild(div);
        });
      
    }
}

class TotalObserver{ //Este observador estará atento para cuando el Sujeto tenga actualizaciones de los items para retornar el precio total y este lo renderizará.
    constructor(tag){
        this.tag = tag;
    }

    notify(subject){
        let total = subject.items.reduce((acum, current) => acum+parseFloat(current.amount), 0)
        this.tag.innerHTML = total;
    }
}

class DynamicObserver{ //Este observador estará atento para cuando el Sujeto tenga actualizaciones de añadir items al carrito, y este lo renderizará.
    constructor(tag, func){
        this.tag = tag;
        this.func = func
    }

    notify(subject){
        this.func(subject, this.tag);
    }
}