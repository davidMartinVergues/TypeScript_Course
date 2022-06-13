# TypeScript course by Traversy 

[video-course-uTube](https://www.youtube.com/watch?v=BCg4U1FzODs)

## What is TS

1. TS is an open source language and a superset of JS
2. Offers additional features to JS including static types
3. Using types is optional
4. Compiles down to regular JS
5. Can b used for front-end (JS and frameworks as Angular) and back-end (nodeJS)


## Dynamic vs static type languages

- In Dynamically types language, the types are associated with run-time values and not named explicitly in your code. (p ex JS, Python)

- In static typed languages, you explicitly assign types to viariable, function parameters, return values, etc (p ex Java)

## Compilling TS

1. TS uses .ts and .tsx extension
2. TSC (TS compiler) is used to compile .ts files down to JS
3. Can watch files and reports errors at compile time
4. Many tools include TS compilation by default
5. Most iDEs have greate support for TS
6. tsconfig.json file is used to configure how TS works


# Intro to TS

## Installing compiler for TS

```
npm install -g typescript
```

## Using TS compiler

```
tsc index.js

```
If we are developing we can use `tsc --watch index.ts` and this is listening for changes in our file and autoreload every changes.

When we use this command TS complie our code into a vanilla JS and create a new file `index.js`. Using tsconfig.json we can set which JS version we want to compile to.

To create that configuration file

```

tsc --init
```
That create a `tsconfig.json` with a lot of configuration but to set JS versión we must change target option

```javascript

"target": "es6",
```
Something important is `outDir` and `rootDir`. Most of the time, if we are not using a framework, we will have a directory, usually called `src`, where will be placed the files which we are working on and another directory, `dist` directory, where we will find our actual project with our JS files  (so when i compile TS files into JS these will be located on dist directory) to set that in `tsconfig.json` we must change 

```javascript
"outDir": "./dist",
"rootDir": "./src", 

```

so we can type `tsc` command directly on terminal and TS compiler will go to src folder and will compile all .ts files and place the compiled JS files into dist folder


## TS Features 

1. Static types 

```javascript
let id: (number | string) = 5

id = "name"
```

Moreover TS has **type inferen** , there are several places where type inference is used to provide type information when there is no explicit type annotation

```javascript
let id = 5 // set id as a number by type inference

id = "name" //error

```

let id: (number | string) = 5

### primitive basic types

```javascript

let id2: number = 5
let my_name: string = 'David'
let bool: boolean = true

let any_type: any = 'David'
any_type = false


let age: number
age = 25


```

### types in arrays

```javascript

let my_arry: number[] = [1, 2, 3, 4, 5, 6]
let my_arry3: any[] = [1, 2, 3, 4, 5, 6, 'david', false]


```

### tuples

types in a particular order called 

```javascript
let my_arry4: [number, string] = [1, 'david']
```

###  array of tuples

tuple must respect the order of variables (number+string)

```javascript
let my_arry5: [number, string][] = [

    [1, 'david'],
    [1, 'david'],

]
```



### unions
more than one type

```javascript
let id4: (number | string) = 5
```


- unions, diferent types inside an array

```javascript
let my_arry2: (number | string)[] = [1, 2, 3, 4, 5, 6, 'david', 25,]
```


### enumerate type

allows us to difine a set of named constans 

```javascript
enum Direction1 {
    UP,  // 0 
    DOWN,// 1
    LEFT,// 2
    RIGHT// 3
}
```
by default enum is set by numbers from 0 to ... but we can change this behaviour 

```javascript

enum Direction2 {
    UP = 1,  // 0 
    DOWN = 2,// 1
    LEFT = 'david',// 2
    RIGHT = 4// 3
}

console.log(Direction2.LEFT);

```


### objects 

```javascript

const User: { id: number, name: string } = {
    id: 1,
    name: 'David'
}


```
a clearly sintaxy could b 

```javascript
type User = {
    id: number,
    name: string
}

const User2: User = {
    id: 1,
    name: 'David'
}
```


type works well with primitive values 

```javascript
type Point = number | string
const p1: Point = 1
```


### Type assertion

explicitly tell the compiler that we want to treat an entity as a different type

```javascript
let cid: any = 1
let customerId = <number>cid
let customerId2 = cid as number
```


### types on functions 

```javascript

function addNumber(x: number, y: number): number {
    return x + y;
}
```
void
```javascript
function log(message: number | string): void {
    console.log(message)
}
```

### interfaces

custom type   very similar to object type but we can not use interfaces for primitive types or unions

```javascript

interface UserInterface {
    id: number,
    name: string,
    age?: number // ? means optional property
}

const user2: UserInterface = {

    id: 1,
    name: 'david',
}
```

when we use interfaces we are allowed to overwrite values

```javascript
user2.id = 5
```

if we want to avoid this we can set a readonly property 

```javascript

interface UserInterface2 {
    readonly id: number,
    name: string,
    age?: number // ? means optional property
}
```

### interfaces with function

```javascript
interface MathFunction {

    (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number): number => x + y
const sub: MathFunction = (x: number, y: number): number => x - y
```
### classes 


```javascript

class Person {

    id: number
    name: string

    constructor(id: number, name: string) {

        this.id = id
        this.name = name
    }

}

const dav = new Person(1, 'David')
```

### Data modifiers 

object properties can be: 

- public -> by default
- private -> can not be accesible by the instance only using methods
- protected -> only can be accesible by the class o a subclass extended 

```javascript

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

```


### implementing interfaces into a class 


```javascript

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
```

### Subclass

```javascript

class Employee extends Person3 {

    position: string

    constructor(id: number, name: string, position: string) {

        super(id, name)
        this.position = position

    }


}

const employee = new Employee(1, 'david2', 'position1')

console.log(employee.register());

```

### generics

basically used to build reusable components 

```javascript
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

numArray2.push('a') // i am not allowed
```

