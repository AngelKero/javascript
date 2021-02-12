var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ? Decorators Aplicado en Metodos
function log(target, key) {
    console.log(key + 'se ha llamado');
}
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    Persona.prototype.sayMyName = function () {
        console.log(this.name); // * Angel sayMyName se ha llamado
    };
    __decorate([
        log
    ], Persona.prototype, "sayMyName");
    return Persona;
}());
// key es el objeto que lo esta llamando, target es el objeto del que extiende
// target: Persona, key: sayMyName
var persona = new Persona('Angel');
persona.sayMyName(); //Angel
// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en Clases
function init(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nombre = 'Alan';
            _this.apellido = 'Buscaglia';
            return _this;
        }
        class_1.prototype.sayMyName = function () {
            return this.nombre + " " + this.apellido;
        };
        return class_1;
    }(target));
}
var P = /** @class */ (function () {
    function P() {
    }
    P.prototype.sayMyName = function () { };
    P = __decorate([
        init
    ], P);
    return P;
}());
var p = new P();
console.log(p.sayMyName()); // * Alan Buscaglia
// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en Propiedades
function logProperty(target, key) {
    var _val = target[key];
    var getter = function () {
        console.log("Get " + key + " => " + _val);
        return _val;
    };
    var setter = function (newValue) {
        console.log("Set " + key + " => " + newValue);
        _val = newValue;
    };
    var objectProperty = {
        get: getter,
        set: setter
    };
    Object.defineProperty(target, key, objectProperty);
}
var Persona1 = /** @class */ (function () {
    function Persona1(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Persona1.prototype, "name");
    return Persona1;
}());
var persona1 = new Persona1('Angel');
persona1.name = 'Platzi';
var nameFromClass = persona1.name;
/*  Salida consola
    * Set: Alan => name
    * Set: Platzi => name
    * Get: name => Platzi
*/
// !---------------------------------------------------------------------- */
// ? Decorators Aplicado en parametros
function logParameter(target, propertyName, index) {
    var metaData = "log_" + propertyName + "_parameters";
    if (Array.isArray(target[metaData])) {
        target[metaData].push(index);
    }
    else {
        target[metaData] = [index];
    }
    console.log(target[metaData]);
}
var Persona2 = /** @class */ (function () {
    function Persona2() {
    }
    Persona2.prototype.greet = function (message) {
        return message;
    };
    __decorate([
        __param(0, logParameter)
    ], Persona2.prototype, "greet");
    return Persona2;
}());
var persona2 = new Persona2();
persona2.greet('Hola');
