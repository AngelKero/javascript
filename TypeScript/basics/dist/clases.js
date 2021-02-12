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
var Transporte = /** @class */ (function () {
    function Transporte(velocidad, formaMovilidad) {
        this.velocidad = velocidad;
        this.formaMovilidad = formaMovilidad;
    }
    Transporte.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Transporte.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Transporte.prototype.getFormaMovilidad = function () {
        return this.formaMovilidad;
    };
    Transporte.prototype.setFormaMovilidad = function (formaMovilidad) {
        this.formaMovilidad = formaMovilidad;
    };
    return Transporte;
}());
var tranporte = new Transporte(20, 'suelo');
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(velocidad, formaMovilidad, cantidadPuertas) {
        var _this = _super.call(this, velocidad, formaMovilidad) || this;
        _this.cantidadPuertas = cantidadPuertas;
        return _this;
    }
    Auto.prototype.getVelocidad = function () {
        return _super.prototype.getVelocidad.call(this) + 10;
    };
    Auto.prototype.getCantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    Auto.prototype.setCantidadPuertas = function (cantidadPuertas) {
        this.cantidadPuertas = cantidadPuertas;
    };
    return Auto;
}(Transporte));
var auto = new Auto(20, 'suelo', 4);
