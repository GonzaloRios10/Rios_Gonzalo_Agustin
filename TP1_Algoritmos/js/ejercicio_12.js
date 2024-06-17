class Vehiculo {
    constructor(parametro1, parametro2, parametro3) {
        this.marca = parametro1;
        this.modelo = parametro2;
        this.año = parametro3;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

class Automovil extends Vehiculo {
    constructor(parametro1, parametro2, parametro3, parametro4, parametro5) {
        super(parametro1, parametro2, parametro3);
        this.color = parametro4;
        this.precio = parametro5;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Precio: ${this.precio}`;
    }
}

const miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
console.log(miVehiculo.obtenerInformacion()); 

const miAutomovil = new Automovil("Honda", "Civic", 2021, "Rojo", 25000);
console.log(miAutomovil.obtenerInformacion()); 