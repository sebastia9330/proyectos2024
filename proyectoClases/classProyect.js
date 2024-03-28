class Cliente{
    //constructor clase Cliente
    constructor(cedula, nombre, apellido, direccion, telefono){
        this._cedula = cedula;
        this._nombre = nombre;
        this._apellido = apellido;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    //metodos get para obtener los datos
    get cedula(){
        return this._cedula;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get direccion(){
        return this._direccion;
    }
    get telefono(){
        return this._telefono;
    }

    //metodos set para actualizar los datos
    set cedula(nuevaCedula){
        this._cedula = nuevaCedula;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido;
    }
    set direccion(nuevaDireccion){
        this._direccion = nuevaDireccion;
    }
    set telefono(nuevoTelefono){
        this._telefono = nuevoTelefono;
    }
}

class Mecanico{
    constructor(cedula, nombre, apellido, salario, fechaContratacion){
        this._cedula = cedula;
        this._nombre = nombre;
        this._apellido = apellido;
        this._salario = salario;
        this._fechaContratacion = fechaContratacion;
    }
    get cedula(){
        return this._cedula
    }
    get nombre(){
        return this._nombre
    }
    get apellido(){
        return this._apellido
    }
    get salario(){
        return this._salario
    }
    get fechaContratacion(){
        return this._fechaContratacion
    }

    //metodos set para actualizar los datos
    set cedula(nuevaCedula){
        this._cedula = nuevaCedula
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre
    }
    set apellido(nuevoApellido){
        this._apellido = nuevoApellido
    }
    set fechaContratacion(nuevafecha){
        this._fechaContratacion = nuevafecha
    }
    set salario(nuevoSalario){
        this._salario = nuevoSalario
    }
}

//crear instancia o ingresar datos del cliente
const cliente = new Cliente('1234567890', 'Juan', 'Perez', 'Calle 123', '123456789');

//salida en patalla datos cliente 1 obtenidos desde el metodo get
console.log(cliente.cedula);
console.log(cliente.nombre);
console.log(cliente.apellido);
console.log(cliente.direccion);
console.log(cliente.telefono);

//datos modificados usando el metodo set
cliente.cedula = "1012402728";
console.log(cliente.cedula);
cliente.nombre = "Sebastian"
console.log(cliente.nombre);
cliente.apellido = "Carrero";
console.log(cliente.apellido);
cliente.direccion = "Carrera 75# 58c - 22sur"
console.log(cliente.direccion);
cliente.telefono = "3245864032";
console.log(cliente.telefono);