export default class Cars {
    nome_car: string;
    placa_car: number;
    ano_car: number;
    id: number;

    private static nextId = 1;


    constructor(nome_car: string, placa_car: number, ano_car: number){
        this.id = Cars.nextId++,
        this.nome_car = nome_car,
        this.placa_car = placa_car,
        this.ano_car = ano_car
    }

}