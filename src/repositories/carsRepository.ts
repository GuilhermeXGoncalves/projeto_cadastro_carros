import Cars from "../models/cars";

const cars : Cars[] = [];

async function getCar(id: number) : Promise <Cars| undefined> {
    return new Promise((resolve, reject)=> {
        return resolve(cars.find(c => c.id === id))
    })
}


async function getCars(): Promise<Cars[]> {
    return new Promise((resolve,reject)=>{
        return resolve(cars)
    })
}

async function addCar(car:Cars) : Promise<Cars> {
    return new Promise((resolve, reject)=> {
        if(!car.nome_car || !car.placa_car || !car.ano_car)
            return reject(new Error(`Carro inválido`))

        const newCar = new Cars(car.nome_car, car.placa_car, car.ano_car)
        cars.push(newCar)

        return resolve(newCar)
    })
}

async function updateCar(id: number, carData: Cars) : Promise<Cars | undefined>  {
    return new Promise((resolve, reject)=> {
        const index = cars.findIndex(c => c.id === id)
        if(index === -1) 
            return reject(new Error(`Carro não encontrado`))

        if(carData.nome_car && cars[index].nome_car !== carData.nome_car)
            cars[index].nome_car = carData.nome_car

        if(carData.placa_car && cars[index].placa_car !== carData.placa_car)
            cars[index].placa_car = carData.placa_car

        return resolve(cars[index])
    })
}


async function deleteCar(id: number) : Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = cars.findIndex(c => c.id === id)
        if(index === -1) return resolve(false)


        cars.splice(index, 1)

        return resolve(true)
    })
}


export default {
    getCar,
    getCars,
    addCar,
    updateCar,
    deleteCar
}