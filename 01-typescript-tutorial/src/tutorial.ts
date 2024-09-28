console.log('Tutorial de TypeScript');

/**
 * 
 * PARA LEVANTAR EL SERVIDOR DE DESARROLLO : npm run dev
 */

// variable are typed

let myName: string = 'David';

// esto implica que la variable no puede ser asignada a otro tipo q no sea un string

// myName = function(){
//     console.log('it cannot b done')
// }

console.log(myName);

myName.toUpperCase();

let myAge: number = 40;

let youAreTheBest: boolean = true;

// TS es capaz de inferir el tipo de dato en el momento de la inicializacion por lo q no seria necesario hacer un ":string"


// union types

let tax: number | string = '45,7'

tax = 100

// everything is fine

// si usamos eunion x ejemplo este caso q la variable puede ser number o str 
//podemos usar metodos asociados a estos tipos para ello debemos poner un "?" para indicar q esta condicionado al tipo

let foundBook: string | undefined;

const list_books: string[] = ['1984', 'hola', 'hola2']

list_books.forEach(book => {
    if (book === '19843') {
        foundBook = book.toUpperCase();
        //break;// no va a funcionar xq hacemos un .forEach())
    }
})

for (let book in list_books) {
    if (book === '19874') {
        foundBook = book.toUpperCase();

        break;
    }
}

console.log(foundBook?.length)
//---------------

// podemos establacer unos valores comncretos a la variable 


let requestsStatus: 'pending' | 'error' | 'success';

rq: requestsStatus = 'success'

// hay un tipo llamado "any"

let notSure: any = 1

notSure = true
notSure = 'hi!'


const books: (string | number)[] = ['gg', 'ff', 'dd', 989, 89]

console.log(books[0])


// Objects

let car: { brand: string; year: number } = {
    brand: 'brand',
    year: 2020
}

// creamos  3 objetyos y los guardamos en una lista


let book = { title: 'book_title', cost: 20 };
let pen = { title: 'pen_title', cost: 20 };
let notebook = { title: 'notebook_title' };


let listObj: { title: string; cost?: number }[] = [book, pen, notebook]

// el ? en una propiedad del objeto nos lo permite hacer una propiedad opcional

// con TS podemos establecer en los objetos propiedades  de solo lectura

let listObj2: { readonly title: string; cost?: number }[] = [book, pen, notebook]
// listObj2[0].title = 'tets_title' //NOT ALLOW
console.log(listObj2[0].title)

console.log('' in listObj)

// podemos usar la funcion includes()
let number_list = [1, 2, 3, 4]
console.log(number_list.includes(1))

// ====== FUNCTION ======= //

function sayHi(myName: string): string {

    return `Hello there ${myName.toUpperCase()}`;
}


console.log(sayHi('david'));

// podemos definir en las funciones parametros opcionales, pero hay q tener en cuenta q la funcion tb debe funcionar cuando no lo suministramos

function calculateDisc(price: number, disc?: number): number {
    return price - (disc || 0)
}
// tb podemos establcer parametros or defecto

function calculateDisc2(price: number, disc: number = 0): number {
    return price - disc
}


// REST parameter en funciones
// con este operador todos los parametros pasados asi seran almacenados en una lista.

function add(message: string, ...numbers: number[]): string {

    const doublied = numbers.map(num => num * 2);

    let total = doublied.reduce((num1, num2) => num1 + num2)

    return `${message} ${total}`
}

console.log(add('result : ', 1, 2, 3, 4, 5, 6))


// type guard
// cuando una funcion puede aceptyar varios tipos tenemos q utilizar una aproximacion de type guard para evitar problemas


function funcA(input: number | string) {

    if (typeof input === 'number') {

        return input * 2
    }

    return input.toLowerCase()
}

funcA(10)
funcA('hello!')


// objetos en funciones

function funcB({ id }: { id: number }): { id: number; active: boolean } {
    return { id, active: id % 2 === 0 }
}

console.log(funcB({ id: 10 }))


function funcC(student: { name: string; id: number }): void {

    console.log(`${student.name} ${student.id}`)
}

let s = {
    id: 1,
    name: 'david'
}

funcC(s)




// type elise
// no es como una clase, solo definimos la forma q debe tener un objeto

type User = {
    id: number;
    name: string;
    isActive: boolean
}

let david: User = {
    id: 1,
    name: 'david',
    isActive: true
}

function createUser(user: User) {
    console.log(user.name)

    return user
}

createUser(david)

// estos tipos se pueden exportar 
export type User2 = {
    id: number;
    name: string;
    isActive: boolean
}


// el type no es solo para definir objetos 

type NumberOrString = number | string

let value: NumberOrString = 10 // esto es correcto

// es muy comun hacer

type Theme = 'light' | 'dark'


let theme: Theme = 'dark'

// solo t deja asignarle esos dos posibles valores a la variable.


type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }

type Staff = Manager | Employee


function printStaffDetail(staff: Staff): void {
    if ('employees' in staff) {

        console.log(`${staff.name} es manager de ${staff.employees.length} employees`)

    } else {

        console.log(`${staff.name} es empleado en el departamente: ${staff.department}`)
    }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' }
const dav: Employee = { id: 1, name: 'dav', department: 'HR' }

const bob: Manager = { id: 1, name: 'bob', employees: [alice, dav] }

printStaffDetail(bob)
printStaffDetail(dav)


// intersection properties

// este operador de interseccion "&" nos permite modificar el tipo de un objeto en concreto, añadiendo/ampliando sus caracteristicas
//por ejemplo a Book le añadimos una nueva property => discount

type Book = { id: number; name: string, price: number }

const book1: Book = { id: 1, name: "name1", price: 11 }
const book2wthDescount: Book & { descount: number } = { id: 2, name: "name2", price: 50, descount: 0.35 }

// otro modo de hacerlo seria creando un Type nuevo

type DiscountedBook = Book & { descount: number }

const book2wthDescount2: DiscountedBook = { id: 2, name: "name2", price: 50, descount: 0.35 }

//======================
//  TENEMOS Q RECORDAR Q EN JS PODEMOS USAR "COMPUTED PROPERTIES"
//======================

const propName = "name"

type Animal = {
    [propName]: string
}


let tiger: Animal = { [propName]: "Joe" }



//======================
//  TYPE INTERFACES 
//======================

// como siempre las interfaces nos describen el "shape" de un objeto 

// al final types e interfaces son intercambiables, tienen el mismo objetivos asi q podemos usar el q prefiramos


interface Books {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;

    printMethod(): void;
    printTitle(message: string): string;
    printSomething: (value: number) => string;
    printSomething2: (value: number) => string;
    printSomething3: (value: number) => string;
}

const deepWork: Books = {

    isbn: 123,
    title: "deepWork",
    author: 'someone',
    genre: 'self-help',

    printMethod() {
        console.log(`title ${this.title} written by ${this.author}`);
    },
    printTitle(message) {

        return `title: ${this.title}; message: ${message}`;
    },

    // hay varios modos de implementar el tercer metodo
    // 1.
    printSomething: function (value) {
        return `${value} and ${this.author}`
    },

    //2.
    printSomething2: (value) => {
        console.log(`este es el this global : ${this}`); // en una arrow function this hace referencia al scoope del padre 

        return `${value} and ${deepWork.author}`
    },


    // 3.

    printSomething3(value) {

        return `${value} and ${this.author}`
    },
}

console.log(deepWork.printSomething(6))
console.log(deepWork.printSomething2(6))
console.log(deepWork.printSomething3(6))


// interface merging

interface Person {

    name: string;
    getDetails(): string;

}

// podemos añadir una propiedad a la interface anteriormente creada

interface Person {
    age: number;
}

interface DogOwner {
    dogName: string;
    getDetails(): string;
}

const person: Person = {
    name: 'John',
    age: 35,
    getDetails() {
        return `Name: ${this.name} Age : ${this.age}`;
    }
}

interface Employee2 extends Person {

    employeeID: number;
}


const employee2: Employee2 = {

    name: 'John',
    age: 40,
    employeeID: 123,
    getDetails() {
        return `Name: ${this.name} Age : ${this.age} and ${this.employeeID}`;
    },
}

interface Manager2 extends Person, DogOwner {

    managePeople(): void;

}


const manager: Manager2 = {

    name: 'John',
    age: 40,
    dogName: 'rex',
    getDetails() {
        return `Name: ${this.name} Age : ${this.age} and ${this.dogName}`;
    },
    managePeople() {
        console.log('managing people');

    }

}

// TYPE GUARD

function isManager(obj: Person | Manager2 | DogOwner): obj is Manager2 {

    return 'managePeople' in obj

}

/**
 * la diferencia entre TYPES e INTERFACES es q interfaces pueden extenderse de otras
 */



// TUPLES

/**
 * En TypeScript, las tuplas son un tipo especial de arreglo que te permiten definir un número fijo de elementos con tipos específicos para cada uno de ellos. 
 * Esto es útil cuando sabes exactamente cuántos valores necesitas y cuáles son sus tipos.
 */

let person3: [string, number] = ['john', 25]

let date: [number, number, number] = [12, 17, 2001]

date.push(34)
date.push(34)
date.push(34)
date.push(34)

// si queremos evitar q podamos añadir mas valores a la tupla podemos declararla como readonly

let date2: readonly [number, number, number] = [12, 17, 2001]


function getPerson(): [string, number] {
    return ['john', 25]
}

// TypeScript permite definir tuplas con un número variable de elementos usando el operador ... (rest):

let tuplaVariable: [string, ...number[]];

tuplaVariable = ["hola"];           // Correcto
tuplaVariable = ["hola", 42, 10, 8]; // Correcto
//tuplaVariable = [42];               // Error: el primer elemento debe ser un string

// en las tuplas podemos usar los metodos push() y pop()


// ENUMS

enum ServerResponseStatus {
    SUCCESS = 200,
    ERROR = 400
}

enum ServerResponseStatus4 {
    SUCCESS = '200',
    ERROR = '400'
}

// por defecto los valores q le asigana son numericos empezando por el 0 
enum ServerResponseStatus2 {
    SUCCESS,//     0
    ERROR//         1
}

// podemos inicializar enun valor e ira sumando a partir de ese
enum ServerResponseStatus3 {
    SUCCESS = 5,//     5
    ERROR//         6
}


interface ServerResponse {
    result: ServerResponseStatus4;
    data: string[];
}

function getServerResponse(): ServerResponse {

    return {
        result: ServerResponseStatus4.SUCCESS,
        data: ['some data']
    }
}

console.log(getServerResponse());




// EN JS tenemos un metodo de Object (objeto del q deriva el resto de objetos de JS) QUE NOS DA losatributos del objeto q queramos

Object.values(ServerResponseStatus2).forEach(value => console.log(value));
// SuCCESS
// ERROR
// 0
// 1

Object.values(ServerResponseStatus).forEach(value => console.log(value));
// SuCCESS
// ERROR
// 200
// 400


enum UserRole {
    Admin, 
    Manager, 
    Employee,
}

type MyUser = {
    id:number;
    name:string;
    role:UserRole;
    contact: [string,string];
}

function createMyUser(user: MyUser):MyUser{
    return user
}

const user:MyUser = createMyUser({id:1,name:'David',role:UserRole.Admin,contact:['myAddress','myNumber']})

// CUANDO EN EL ENUM EL VALOR Q LE ASIGNAMOS ES UN NUMBER O DEJAMOS Q LO AUTOASIGNE SE PUEDE HACER REVERSE MATCHING ES DECIR SI PONGO ServerResponseStatus.SUCCESS ME DA 200.
type STATUS ={

    value:ServerResponseStatus | ServerResponseStatus4;
}

const ss : STATUS = {value:200} // xq es in number
// const sss : STATUS = {value:'400'} // se queja xq es un string xa arreglarlo usamos "as"
const ssss : STATUS = {value:'400' as ServerResponseStatus4 } // se queja xq es un string xa arreglarlo usamos "as"

console.log(ss);


//  HAY UN VALOR EN TS LLAMADO "unknown"

let unKnownValue : unknown;

//  EN TS LO QUE PONGAMOS EN EL ARCHIVO TS POR DEFECTO PASA AL SCOOP GLOBAL, ASI DOS VARIABLES UNQUE ESTEN EN ARCHIVOS DIFERENTES NO SE PUEDEN LLAMAR IGUAL !!!!!


// MODULOS EN TS SIGUEN LOS MODULOS DE ES6
/**
 * 
 * 
 */
import newStudent,{personn, type Student} from './export_to_tutorial'

console.log(personn);
console.log(newStudent);

const anotherStudent : Student = {
    name:"David4",
    age: 41
}


// generics

// nos permiten escribir funciones/ interfaces que acepten argumentos de cualquier tipo

function genericFunction<T>(arg:T):T{
    return arg
}

console.log(genericFunction(8767))


// VAMOS A ESCRIBIR UNA FUNCION ASINCRONA EN JS Y RECORDEMOS QUE CUALQUIER FUNCION ASINCORNA EN JS DEVUELVE UNA PROMISE,
// y en la promesa puede devolver cualquier tipo xq acepta genericos

async function someFunc():Promise<string>{
    return 'hello'
}


function createArray<T>(length:number,value:T):Array<T>{
    let result : Array<T> = [];

    result = Array(length).fill(value);

    return result;

}

// funciones con multiples tipos

function pair<T,U>(param1:T,param2:U):[T,U]{
    return [param1,param2]
}


let result = pair('hello',123)

console.log(result);

// podemos limitar el tipo de opciones q adopta un valor generico

function processValue <T extends string  | number >(value:T):T{
    return value
}

// que pasa si tenemos nuestro propios tipos

type Car = {
    name:string;
    age:number;
}

type Student2 = {
    name:string;
    age:number;
}

type Fruit = {
    name:string;

}

const myCar:Car = {
    name:'car',
    age:2
}

const myStudent:Student2 = {
    name:'david',
    age:20
}

const myFruit:Fruit = {
    name:'naranja'
}

function printName<T extends Car | Student2 >(car:T):void{
    console.log(car.name);
     
}

printName(myCar)
printName(myStudent)
/*
printName(myFruit) // se queja xq aunq FRUIT TENGA LA PROPIEDAD NOMBRE TB HEMOS FIJADO Q EL GENERICO SOLO PUEDE SER CAR O STUDENT

*/


// vaklor por defecto de un generic

interface StoreData<T = any>{
    data : T[];
}

// aqui sabemos el tipo de datos q almacenaremos en storeData
const storeNumbers:StoreData<number> = {
    data:[1,2,3]
}

// pero si no sabemos podemos settear un valor x defecto lo habitual es poner any <T = any>

const storeStuff:StoreData= {
    data:[1,'hello', car]
}

// FETCHING DATA USIN TYPESCRIPT

/*
LO HABITUAL ES USAR UNA LIBRERIA COMO AXIOS PERO 


*/

