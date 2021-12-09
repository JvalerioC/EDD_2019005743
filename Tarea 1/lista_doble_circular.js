class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class listaDobleCircular{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
            this.primero.siguiente = nuevo
            this.primero.anterior = nuevo
        }else{
            let aux = this.primero;
            while(aux.siguiente != this.primero){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
            nuevo.anterior = aux;
            this.primero.anterior = nuevo;
            nuevo.siguiente = this.primero;
        }
    }
    
    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            console.log("-> " + aux.dato);
            aux = aux.siguiente;
        }
    }
}

let lista = new listaDobleCircular();

lista.insertar(10);
lista.insertar(12);
lista.insertar(7);
lista.insertar(5);
// lista.mostrar(); //si se ejecuta se quedara ciclado porque siguiente 
// nunca sera null para que se muestre solo los no repetidos deberia
// ser hasta que sea diferente a primero pero ya que los datos son 
// numeros este puede repetirse y no mostrar la lista completa en dado
// caso recomiendo que sean objetos con un id para poder mostrar 
// bien la lista circular, en este caso doblemente enlazada