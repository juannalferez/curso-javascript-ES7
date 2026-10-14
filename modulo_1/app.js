console.log("hello world");
console.log("Estoy aprendiendo JavaScript.");

//VARIABLES Y TIPOS DE DATOS




//DIFERENCIA ENTRE LET Y CONST
let ciudad = "Madrid";
ciudad = "Barcelona"; // Esto es válido porque 'ciudad' es una variable declarada con 'let'

const pais = "España";
//pais = "Francia"; // Esto generará un error porque 'pais' es una constante declarada con 'const'

//TIPOSD DE DATOS

const nombre = "Ana"; // String
const edad = 30; // Number
const esEstudiante = true; // Boolean
let temporada; // Undefined
const direccion = null; // Null se usa para representar la ausencia de valor

console.log(typeof nombre); //string
console.log(typeof edad); //number
console.log(typeof esEstudiante); //boolean
console.log(typeof temporada); //undefined
console.log(typeof direccion); //object (esto es un comportamiento conocido de JavaScript, ya que null es considerado un objeto)

// la diferencia entre null y undefined
// undefined significa que una variable ha sido declarada pero no se le ha asignado un valor.
// nulles un valor asignado que indica que no tiene ningun valor.

const nombreUsuario = "Maria";
const edadUsuario = 25;

const mensaje = `El nombre del usuario es ${nombreUsuario} y tengo ${edadUsuario} años.`;
console.log(mensaje );

//operadores aritméticos

const a = 10;
const b = 5;

console.log(a + b); // Suma: 15
console.log(a - b); // Resta: 5
console.log(a * b); // Multiplicación: 50
console.log(a / b); // División: 2
console.log(a % b); // Módulo: 0 (resto de la división)

//operadores de comparación

console.log(a > b); // Mayor que: true
console.log(a < b); // Menor que: false
console.log(a >= b); // Mayor o igual que: true
console.log(a <= b); // Menor o igual que: false
console.log(a == b); // Igualdad: false
console.log(a === b); // Igualdad estricta: false
console.log(a !== b); // Desigualdad estricta: true

//operadores lógicos

const edadPersona = 20;
const tieneDocumento = true;

const puedeIngresar = edadPersona >= 18 && tieneDocumento; // true si la persona es mayor de edad y tiene documento
console.log(puedeIngresar); // true

const esMayorDeEdad = edadPersona >= 18 || tieneDocumento; // true si la persona es mayor de edad o tiene documento
console.log(esMayorDeEdad); // true

const noPuedeIngresar = !puedeIngresar; //Negación: true si la persona no puede ingresar
console.log(noPuedeIngresar); // true

// conversion de datos

const precio = "100";
const cantidad = 5;

const total = Number(precio) * cantidad; // Convertimos 'precio' a número antes de multiplicar
console.log(total); // 500

// desarrollar un programa que calcule el salario semanal de un trabajador, considerando horas trabajadas y tarifa por hora. Agregar una bonificacion del 10% cuando el salario base supere $500000


const horasTrabajadas = 48;
const tarifaPorHora = 12000;

const salarioBase = horasTrabajadas * tarifaPorHora;

// Calcular la bonificación del 10%
let bonificacion = 0;

if (salarioBase > 500000) {
    bonificacion = salarioBase * 0.10;
}

const salarioTotal = salarioBase + bonificacion;

console.log(`Salario base: $${salarioBase}`);
console.log(`Bonificación: $${bonificacion}`);
console.log(`Salario total: $${salarioTotal}`);

const edad2 = 20;
edad2 >= 18 ? console.log("Eres mayor de edad.") : console.log("Eres menor de edad.");

//condicionales multiples 

const calificacion = 85;

if (calificacion >= 90) {
    console.log("Excelente");
} 
else if (calificacion >= 80) {
    console.log("Muy bien");
} 
else if (calificacion >= 70) {
    console.log("Bien");
} 
else if (calificacion >= 60) {
    console.log("Suficiente");
} 
else {
    console.log("Insuficiente");
}

//condicionales compuestas 

const edad3 = 25;
const tieneEntrada = true;

if (edad3 >= 18 && tieneEntrada) {
    console.log("Puede ingresar al evento.");
} else {
    console.log("No puede ingresar al evento.");
}




const entrada = "350000";
const compra = Number(entrada);
let descuento = 0;

if (entrada.trim() === "" || Number.isNaN(compra)) {
    console.log("Error: debes ingresar un valor numérico.");
} else if (compra < 0) {
    console.log("Error: no se aceptan compras negativas.");
} else {
    if (compra < 100000) {
        descuento = 0;
    } else if (compra < 300000) {
        descuento = 0.05;
    } else if (compra < 500000) {
        descuento = 0.10;
    } else {
        descuento = 0.15;
    }

    const valorDescuento = compra * descuento;
    const totalPagar = compra - valorDescuento;

    console.log("Valor de la compra: $" + compra);
    console.log("Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Valor del descuento: $" + valorDescuento);
    console.log("Total a pagar: $" + totalPagar);
}

