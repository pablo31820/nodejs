/*
Dada las siguiente funcions constructoras
fucntion Foo(name){
   this.name = name
}
fucntion Bar(name,surname){
   this.name = name
   this.surname = surname
}

crear una funcion factory que pasando el ambito nombre del constructor y argumentos
del constructor sea capaz de crear instancioas de los constructores

La firma seria:

functin factory(scope,strType,...args){

}
*/

function Foo(name){
   this.name = name
}
function Bar(name,surname){
   this.name = name
   this.surname = surname
}

function factory(scope,strType,...args){
    debugger
    const ctor = scope[strType];

    if(!ctor){
        throw `El tipo ${strType} no existe`
    }
    const instance = Object.create(ctor.prototype) //this
    ctor.apply(instance,args)
    return instance
}

var foo = factory(window,"Foo","Pedro")
var foo1 = new Foo("Pedro")