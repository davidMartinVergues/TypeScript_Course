# INDEX

- [TypeScript Course](#typescript-course)
- [Introducción](#introducci-n)
  - [Que es TypeScript](#que-es-typescript)
  - [Instalar TS](#instalar-ts)

https://ecotrust-canada.github.io/markdown-toc/

---

---

# TypeScript Course

### by Maximillian Academind (youTube)

> <span style="font-size:1.5em;"> [_link del video_](https://www.youtube.com/watch?v=BwuLxPH8IDs&t=581s) </span>

---

- # Introducción
  - ## Que es TypeScript

Es un superset de javaScript, es decir un lenguaje de programación construido sobre JS. Es decir no es un nuevo lenguaje, si no que coge JS y añade nuevas funciones y nuevas ventajas. Lo que hace a JS más sencillo y poderoso.

La desventaja es que TS no puede ser usado en interpretes de JS como el navegador o node.js. Así que para poderlo usar TS debe ser compilado a JS y este es el que será ejecutado.

![error(](images/img-1.png)

Ventajas de TS puede ser que introduce tipos de datos y nos facilita debugear el código.

Si tenemos este código

```
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('button');
const result = document.querySelector('p');

function add(num1, num2) {
  return num1 + num2
}

btn.addEventListener('click', () => {

  result.innerText = add(num1.value, num2.value)
})

```

Cuando cogemos el valor de un input JS siempre lo hace como un string, lo que el resultado de la función será dos números concatenamos (5+5 = 55).

Para solucionar esto en JS tenemos que comprobar los tipos con **typeof** y conversión a number con el **+** delante

```

function add(num1, num2) {

 if (typeof num1 === 'number' && typeof number2 === 'number') {
   return num1 + num2
 } else {
   return +num1 + +number2
 }
}

```

Esto es un error en el código que TS nos ayuda a evitar.

El archivo escrito en TS sería

```
const num1 = document.querySelector('#num1')! as HTMLInputElement;
const num2 = document.querySelector('#num2')! as HTMLInputElement;
const btn = document.querySelector('button');
const result = document.querySelector('p');

function add(num1: number, num2: number) {

  return num1 + num2
}

btn.addEventListener('click', () => {

  console.log(add(+num1.value, +num2.value))
})

```

- ! as HTMLInputElement -> indicamos que realmente existe un elemento HTML con ese id (es como una doble comprobación que nos obliga TS)
- num1: number -> indicamos q los argumentos de la función serán tipo number
- +num1.value -> hacemos conversión de tipo (ya q TS ns daba error)

  - ## Instalar TS
    Para ello usaremos node.js y con el gestor de paquetes npm pasamos el siguiente comando

  ```
  sudo npm install -g typescript
  ```

  > Si no tenemos **_nodeJS_** instalado (usando nvm):

  1.  Instalamos nvm
      `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

            - comprobamos verison ``` nvm --version ```

  2.  Miramos en la web de node la última versión
      `nvm install 14.9.0` - comprobamos verison `node -v`

Una vez tenemos instalado el compilador de TS para compilar a JS un archivo TS

```
  tsc ts-file.ts
```

Esto nos generará un archivo JS que será el que leerá el interprete de JS(navegador, node,...)

![error](images/img-2.png)

---

---

# TypeScript overview

![error](images/img-3.png)

---

---

# Trabajando con Tipos

TS provee de muchos tipos de datos a JS, incluso permite crear nuestros propios tipos.
Una cosa a tener en cuenta es que en JS los tipos son dinámicos, es decir puedes definir una variable como number y luego reasignarla como String. En camio en TS eso no es posible (usa tipos estáticos) y en tiempo de desarrollo saltará un error.

1. Tipos de datos soportados por JS y TS
   - Number => no hay distinción entre integers y floats
   - Strings => también soporta los templates strigs
   - Boolean
   - Object
2. Tipos exclusivos de TS
   - Object con constructor

## Tipos por defecto en una función

Para poder decirle a TS que en la función solo acepte un tipo concreto de datos debemos usar la notación de :

```
function add(n1:number, n2:number) {
  return n1 + n2;
}
```

Al fijar estos dos argumentos como number el editor ya me avisa que tengo un error y cuando intento compilar y salta el error

![error](images/img-4.png)

También podemos usar la notación de ':' cuando definimos una variable.

```
let n1: number;
n1= 5;
}
```

Así 'avisamos' a TS que la variable contendrá un number y si queremos asignarle otro tipo nos dará error.

![error](images/img-5.png)

```
let n1: number= 5;
}
```

esto sería una mala praxis porque el core types de TS tiene una función que se llama **_inferencia de datos_** esto significa que cuando inicializamos una variable TS 'recuerda' que tipo de dato es el inicial y si intentamos darle otro tipo de dato también se quejará.

![error](images/img-6.png)
