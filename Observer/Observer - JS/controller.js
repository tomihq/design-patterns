let itemsSubject = new ItemSubject();
let listObserver = new ListObserver(document.querySelector("#list"));
let totalObserver = new TotalObserver(document.querySelector("#spnTotal"));
let dynamicObserver = new DynamicObserver(document.querySelector("#spnCount"), (subject, tag) =>{
    tag.innerHTML = subject.items.length;
})
itemsSubject.suscribe(listObserver);
itemsSubject.suscribe(totalObserver);
itemsSubject.suscribe(dynamicObserver);
/* itemsSubject.unsuscribe(dynamicObserver); */ // Dejaria de recibir las actualizaciones de la cantidad de items

const add = () =>{
   const txtDescription = document.querySelector("#txtDescription").value;
   const txtAmount = document.querySelector("#txtAmount").value;
    itemsSubject.notify({
        description: txtDescription,
        amount:  txtAmount
    })
}



/*
Orden de ejecución:
    1. Creamos el sujeto (itemsSubject).
    2. Creamos un observador listObserver que tendrá el trabajo de escuchar al Sujeto notificar cuando se añada un elemento.
    3. El sujeto, indica que un Observador quiere estar pendiente de sus actualizaciones. El observador es listObserver.
    4. Al dar click en add, el sujeto debe notificar que añadieron un producto, por lo tanto los observadores deben hacer su trabajo.
    5. El notify de la clase de ItemSubject hace referencia al notify de la clase padre de la que extiende, y envia la notificacion a cada uno de los observadores que están pendientes de este sujeto.
    6. En el caso de la lista, el observador de listObserver tendrá el trabajo de recibir la data, y renderizarla.
    7. En el caso de totalObserver, recibirá el objeto también entero, y tendrá que sumar cada uno de los precios.
    8. En el caso de dynamicObserver, recibirá el objeto también entero pero ejecutará una función que lo que hará es retornar la longitud de array de items.
    9. Por último, si queremos que un Observador deje de estar pendiente de un sujeto, le decimos al Sujeto que ese Observador dejará de estar pendiente y lo eliminará de la lista (unsuscribe(dynamicObserver))

    De esta forma podemos imaginar como trabajan los Frameworks y la actualización en tiempo real de las cosas como si fuese un control de estados.
*/