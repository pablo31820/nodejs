//<2015
function Foo(name) {  //El tipo y el constructor PascalCase
    this.name = name
}

Foo.prototype.write = function(){  //Metodo publico
    this._write();
}

Foo.prototype._write = function(){ //Metodo privado
    console.log(this.name)
}

Foo.write = function(){ //Metodo estatico
    console.log("Static method");
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

//>2015
class Foo{
    constructor(name){
        this.name = name
    }
    write(){
        this._write();
    }
    _write(){
        console.log(this.name)
    }
    static write(){
        console.log("static method")
    }
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//tranpilacion
    //1. TypeScript(Microsoft)
    //2. Babel(Open Source)-<Facebock->React

//https://github.com/tc39/proposals/blob/main/finished-proposals.md
//https://chromestatus.com/roadmap