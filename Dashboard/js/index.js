const input = document.getElementById('input-text')
const button = document.querySelector('button')
const list = document.getElementById('ul-list')
const todos = ['wewe']

button.addEventListener('click', ()=>{
        if (todos.includes(input.value) === true) {
            console.log('ja existe')
        }else{
            todos.push(input.value)
            list.innerHTML = todos.map((i) => `
            <li>${i}</li>
            <button>delete</button>
            `).join('')
        }
})
