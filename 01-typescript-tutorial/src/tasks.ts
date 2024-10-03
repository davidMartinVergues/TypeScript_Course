// common approaches

// que nosotros usemos queryselector para coger un elemento html no asegura q ese elemento exista 
//por lo q la constante puede ser null , para indicar esto TS pone btn?.addEventListener
// El problema de esto es q antes de usar el supuesto boton necesitamos comprobar q realmente existe


const btn = document.querySelector('.test-btn');


if(btn){
  
  btn?.addEventListener('click', e =>{
    console.log(e);
    
  })
  
}

// 


// un modo de decirle a TS "oye sé seguro q este elemento existe"  es usando !

// con esto ya no tendremos q poner ? 

const btn2 = document.querySelector('.test-btn')!;

btn2.addEventListener('click', e =>{
  console.log(e);
  
})



// otra cosa a tener en cuenta, es q si usamos querySelector obtenemos la class mas generica de los elementos HTML, lo q significa q el suggestion 
// solo nos mostrara los metodos comunes a todos los elementos HTML, si queremos q nos ayude más debemos pasarle el tipo de elemento HTML

const btn3 = document.querySelector<HTMLButtonElement>('.test-btn')!;
const btn4 = document.querySelector('.test-btn')! as HTMLButtonElement;

btn3.disabled = true

console.log(btn3);



//

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');

const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // add task to list
    addTask(task);
    // render tasks
    renderTask(task);
    // update local storage
    updateStorage();
    formInput.value = '';
    return;
  }
  alert('Please enter a task description');
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox

  taskCheckbox.addEventListener('change', () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
