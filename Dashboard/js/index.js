const input = document.getElementById("input-text");
const button = document.querySelector("button");
const ulStart = document.getElementById("ul-start");
const ulMiddle = document.getElementById("ul-middle");
const ulEnds = document.getElementById("ul-end");
const todos = [
  {
    start: [{ id: 0, todo: "Primeiro" }],
    middle: [{ id: 1, todo: "Segundo" }],
    end: [{ id: 2, todo: "Terceiro" }],
  },
];
const fillTables = () => {
  if (input.value !== "") {
    todos[0].start.push({ id: todos[0].start.length, todo: input.value });
  } else {
    console.log("Is empty!");
  }
  ulStart.innerHTML = todos[0].start
    .map(
      (i) => `
        <h1>${i.id}</h1>
        <li>${i.todo}</li>
        <button id="${i.id}" onClick="deleteTodo(this.id)">Delete</button>
        `
    )
    .join("");
  ulMiddle.innerHTML = todos[0].middle
    .map(
      (i) => `
        <li>${i.todo}</li>
        `
    )
    .join("");
};

fillTables();

button.addEventListener("click", () => {
  fillTables();
});

const deleteTodo = (id) => {
  console.log(todos[0].start);
  console.log(id);
  if (id === 0) {
    todos[0].start.shift();
    console.log("Deletando o primeiro index!");
  } else if (id === todos.length) {
    todos[0].start.pop();
    console.log("Deletando o ultimo index!");
  } else {
    todos[0].start.splice(id, 1);
  }
  console.log(todos[0].start);
  fillTables();
};
