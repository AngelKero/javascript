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
var Persona = /** @class */ (function () {
    function Persona(edad, altura, dni) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
    return Persona;
}());
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(edad, altura, dni, matricula) {
        var _this = _super.call(this, edad, altura, dni) || this;
        _this.matricula = matricula;
        return _this;
    }
    return Alumno;
}(Persona));
var persona = new Persona(27, 1.69, '364885');
var alumno = new Alumno(27, 1.69, '364885', '123');
persona = alumno;
