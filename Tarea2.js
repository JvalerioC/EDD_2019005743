class nodoListaPrincipal{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.lista = new lista();
    }
}

class listaPrincipal{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodoListaPrincipal(dato); 

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                if(aux.dato==dato){
                    console.log("el valor "+ dato +" ya existe, No se puede insertar");
                    return
                }
                aux = aux.siguiente;
            };
            if(aux.dato==dato){
                console.log("el valor "+ dato +" ya existe, No se puede insertar");
                return
            }
            aux.siguiente = nuevo;
        }
    }

    mostrar(){
        let aux = this.primero;
        console.log("***** Mostar Lista *****")
        while(aux != null){
            console.log("- " + aux.dato);
            aux.lista.mostrar();
            aux = aux.siguiente;
        }
    }

    insetar_lista(dato_lista,valor_insertar){
        let aux= this.primero;
        while(aux!= null){
            if(dato_lista == aux.dato){
                aux.lista.insertar(valor_insertar);
                //console.log("se inserto el valor en la lista de "+aux.dato);
                return 
            }else{
                aux = aux.siguiente;
            }
        }
        console.log("no se encontro el dato "+ dato_lista +" en la lista")
        return null;
    }
}

class nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}

class lista{
    constructor(){
        this.primero = null;
    }

    insertar(dato){
        let nuevo = new nodo(dato); 

        if(this.primero == null){ //la lista esta vacia
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente != null){
                aux = aux.siguiente;
            };
            aux.siguiente = nuevo;
        }
    }

    mostrar(){
        let aux = this.primero;
        while(aux != null){
            console.log("   * " + aux.dato);
            aux = aux.siguiente;
        }
    }
}

let lista1 = new listaPrincipal();
lista1.insertar("Josue");
lista1.insertar("Carlos");
lista1.insertar("Josue"); // este valor ya esta en la lista por eso no se inserta
lista1.insetar_lista("Josue",1);
lista1.insetar_lista("Josue",1);
lista1.insetar_lista("Josue2",2); // este es un dato de nombre que no esta en la lista por eso no se inserta
lista1.insetar_lista("Josue",3);
lista1.insetar_lista("Carlos",5);
lista1.insetar_lista("Carlos",9);
// se hizo solamente con los datos proporcionados en el enunciado de la tarea
lista1.mostrar();