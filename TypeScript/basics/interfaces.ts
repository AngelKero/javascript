type Dni = number;

/* *'?' hace que un atributo sea opcional */
interface Persona{
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni : Dni;
}

const persona: Persona = {
    edad: 27,
    nombre: 'Alan',
    apellido: 'Buscaglia',
    dni: 1877445
}