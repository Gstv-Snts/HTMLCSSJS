const input = document.getElementById("input-text");
const button = document.querySelector("button");
const ulStart = document.getElementById("ul-start");
const ulMiddle = document.getElementById("ul-middle");
const ulEnds = document.getElementById("ul-end");
const todos = new Map();
const fillTables = () => {
  if (
    input.value !== "" &&
    todos[0].start.find((i) => i.todo === input.value) === undefined
  ) {
    todos.set({ id: todos[0].start.length, todo: input.value });
    input.value = "";
  } else {
    console.log("Invalid todo!");
  }
  ulStart.innerHTML = todos.map(
    (i) => `
        <li>${i.todo}</li>
        <button id="${i.id}" onClick="deleteTodo(this.id)">Delete</button>
        `
  );
};

fillTables();

button.addEventListener("click", () => {
  fillTables();
});

const deleteTodo = (id) => {
  console.log(todos[0].start);
  console.log(id);

  todos = new Map();
  console.log(todos[0].start);
  fillTables();
};
