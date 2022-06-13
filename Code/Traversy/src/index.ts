let id: (number | string) = 5

// primitive basic types

let id2: number = 5
let my_name: string = 'David'
let bool: boolean = true

let any_type: any = 'David'
any_type = false


let age: number
age = 25

// types in arrays

let my_arry: number[] = [1, 2, 3, 4, 5, 6]
let my_arry3: any[] = [1, 2, 3, 4, 5, 6, 'david', false]

// types in a particular order called tuples
let my_arry4: [number, string] = [1, 'david']
// array of tuples, tuple must respect the order of variables (number+string)
let my_arry5: [number, string][] = [

    [1, 'david'],
    [1, 'david'],

]

//unions, more than one type
let id4: (number | string) = 5

// unions, diferent types inside an array
let my_arry2: (number | string)[] = [1, 2, 3, 4, 5, 6, 'david', 25,]

// enumerate type, allows us to difine a set of named constans 

enum Direction1 {
    UP,  // 0 
    DOWN,// 1
    LEFT,// 2
    RIGHT// 3
}

// by default enum is set by numbers from 0 to ... but we can change this behaviour 

enum Direction2 {
    UP = 1,  // 0 
    DOWN = 2,// 1
    LEFT = 'david',// 2
    RIGHT = 4// 3
}

console.log(Direction2.LEFT);

// objects 

const User: { id: number, name: string } = {
    id: 1,
    name: 'David'
}

// a clearly sintaxy could b 

type User = {
    id: number,
    name: string
}

const User2: User = {
    id: 1,
    name: 'David'
}

// type works well with primitive values 

type Point = number | string
const p1: Point = 1

// Type assertion, explicitly tell the compiler that we want to treat an entity as a different type
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number

// types on functions 

function addNumber(x: number, y: number): number {
    return x + y;
}

// void
function log(message: number | string): void {
    console.log(message)
}

// interfaces, custom type   very similar to object type but we can not use interfaces for primitive types or unions

interface UserInterface {
    id: number,
    name: string,
    age?: number // ? means optional property
}

const user2: UserInterface = {

    id: 1,
    name: 'david',


}

// when we use interfaces we are allowed to overwrite values

user2.id = 5

// if we want to avoid this we can set a readonly property 

interface UserInterface2 {
    readonly id: number,
    name: string,
    age?: number // ? means optional property
}

// interfaces with function

interface MathFunction {

    (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number): number => x + y
const sub: MathFunction = (x: number, y: number): number => x - y

// classes 

class Person {

    id: number
    name: string

    constructor(id: number, name: string) {

        this.id = id
        this.name = name
    }

}

const dav = new Person(1, 'David')

// Data modifiers 

/*
    object properties can be: - public -> by default
                              - private -> can not be accesible by the instance only using methods
                              - protected -> only can be accesible by the class o a subclass extended 
*/

class Person2 {

    private id: number
    name: string

    constructor(id: number, name: string) {

        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }

}

const dav2 = new Person2(1, 'David')


console.log(dav2.register());


// implementing interfaces into a class 

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}


class Person3 implements PersonInterface {

    id: number
    name: string

    constructor(id: number, name: string) {

        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }

}

//subclass

class Employee extends Person3 {

    position: string

    constructor(id: number, name: string, position: string) {

        super(id, name)
        this.position = position

    }


}

const employee = new Employee(1, 'david2', 'position1')

console.log(employee.register());


// generics, basically used to build reusable components 

function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

const numArray = getArray([1, 2, 3, 4, 5])
const strArray = getArray(['a', 'b', 'c'])

numArray.push('a') // no error 

// to avoid this we have generics 

function getArray2<T>(items: T[]): T[] { // T -> type
    return new Array().concat(items)
}


const numArray2 = getArray2<number>([1, 2, 3, 4, 5])
const strArray2 = getArray2<string>(['a', 'b', 'c'])

//numArray2.push('a') // i am not allowed


