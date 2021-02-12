// ? Decorators Aplicado en Metodos
function log(target, key) {
    console.log(key + 'se ha llamado');
}

class Persona{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    @log
    sayMyName(){
        console.log(this.name); // * Angel sayMyName se ha llamado
    }
}

// key es el objeto que lo esta llamando, target es el objeto del que extiende
// target: Persona, key: sayMyName

const persona: Persona = new Persona('Angel');

persona.sayMyName(); //Angel


// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en Clases
function init(target) {
    return class extends target{
        nombre = 'Alan';
        apellido = 'Buscaglia';
        sayMyName(){
            return `${this.nombre} ${this.apellido}`
        }
    }
}

@init
class P{
    constructor(){}

    sayMyName(){}
}

const p : P = new P();
console.log(p.sayMyName()); // * Alan Buscaglia


// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en Propiedades
function logProperty(target: any, key: any) {
    let _val: any = target[key];
    const getter = () => {
        console.log(`Get ${key} => ${_val}`)
        return _val;
    } 
    const setter = (newValue: any) => {
        console.log(`Set ${key} => ${newValue}`)
        _val = newValue;
    } 
    const objectProperty = {
        get: getter,
        set: setter
    }
    Object.defineProperty(target, key, objectProperty);
}

class Persona1{
    //Se aplica el decorator a name
    @logProperty
    public name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

const persona1 : Persona1 = new Persona1('Angel');
persona1.name = 'Platzi';
const nameFromClass = persona1.name;

/*  Salida consola
    * Set: Alan => name
    * Set: Platzi => name
    * Get: name => Platzi
*/



// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en parametros
function logParameter(target: any, propertyName: any, index: any) {
    const metaData = `log_${propertyName}_parameters`;
    if (Array.isArray(target[metaData])) {
        target[metaData].push(index);
    } else{
        target[metaData] = [index]; 
    }
    console.log(target[metaData]);
}

class Persona2{
    greet(@logParameter message: string): string{
        return message;
    }
}

const persona2 = new Persona2();
persona2.greet('Hola');