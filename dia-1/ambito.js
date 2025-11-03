//1. Asigno una puntero a funcion a una variable
window.x=10
window.foo = {
    x:11,
    write:function(){
        console.log(this.x)
    }
}

console.log(window.foo.write()) //11
window.writer = window.foo.write;  //se pierde ambito
console.log(window.writer()) //10
window.writer = window.foo.write.bind(window.foo)
console.log(window.writer()) //11

//2.En el momento que pasas un metodo a una funcion se pierde el ambito

class Foo{
    constructor(){
        //new Bar(this.writer)
        new Bar(this.writer.bind(this)) //x 1 //stack
        //new Bar(()=>this.writer()) //2 stack
    }
    writer(){
        console.log(this)
    }
}

class Bar{
    constructor(writer){
        debugger
        console.log(writer()) //undefine
        this.writer = writer
        console.log(this.writer()) //bar
    }
}

new Foo()

const bar = {}

function Biz(name,surname){
    this.name = name
    this.surname = surname
}

//new Biz(....) //instancia
//Biz(...) //global
Biz.call(bar,"Pedro","Hurtado")
//bar {name:'Pedro', surname:'Hurtado}
Biz.apply(bar,["Pedro","Hurtado"])
//bar {name:'Pedro', surname:'Hurtado}