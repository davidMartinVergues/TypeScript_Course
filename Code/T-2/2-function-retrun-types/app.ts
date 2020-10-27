
function add (n1:number, n2:number):number{

  return +n1+n2;
}

// si modificamos el return TS es capaz de detectarlo


function add2 (n1:number, n2:number){

  return n1.toString()+n2.toString();
}


function add3 (n1:number, n2:number): number{

  return n1+n2;
}

function printResult (n1:number, n2:number){

  console.log('Result: '+ +n1+n2);
  
}

// Type Function y como utilizarlo

let combineValues : (a:number,b:number)=> number;

combineValues = add;

// CALLBACKS

function addAndHandle (a:number,b:number, callBackFunction : (num:number)=>void){

  const result = a+b;

  callBackFunction(result);
}


addAndHandle(10,20, (result)=>{ //creamos una función anónima que es el callback
  console.log(result);
  
})

// Unknown type

let userInput : unknown;
let userName : string;

userInput= 5;
userInput= 'ddd';

if(typeof userInput === 'string'){

  userName= userInput;
}


// never type

function generateError(message:string,code:number): never{

  throw{message:message, errorCode:code}

}


generateError('a error has ocurred in time 6:00', 500);