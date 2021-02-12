class Transporte{
    private velocidad: number;
    private formaMovilidad: string;

    constructor(velocidad: number, formaMovilidad: string){
        this.velocidad = velocidad;
        this.formaMovilidad = formaMovilidad;
    }

    getVelocidad(){
        return this.velocidad;
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }

    getFormaMovilidad(){
        return this.formaMovilidad;
    }

    setFormaMovilidad(formaMovilidad: string){
        this.formaMovilidad = formaMovilidad;
    }
}

const tranporte: Transporte = new Transporte(20, 'suelo');

class Auto extends Transporte{
    private cantidadPuertas: number;

    constructor(velocidad: number, formaMovilidad: string, cantidadPuertas: number){
        super(velocidad, formaMovilidad);
        this.cantidadPuertas = cantidadPuertas;
    }

    getVelocidad(){
        return super.getVelocidad() + 10;
    }

    getCantidadPuertas(){
        return this.cantidadPuertas;
    }

    setCantidadPuertas(cantidadPuertas: number){
        this.cantidadPuertas = cantidadPuertas;
    }
}

const auto : Auto = new Auto(20, 'suelo', 4)