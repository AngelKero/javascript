type SumaParametros = number | string;
type SumaReturnType = number | string;

function suma(num1: SumaParametros, num2: SumaParametros): SumaReturnType{
    return String(num1) + num2;
}

interface Interface1{
    prop1: number;
}

interface Interface2{
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

const interfaceMix: InterfaceMix = {
    prop2: 2
}