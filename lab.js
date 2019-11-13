document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let input = document.querySelector('#input')
        if (!input.value) {

            let error = document.createElement('p')
            error.innerText = 'error. To Do cannot be empty'
            
            
            document.body.appendChild(error)
            
            
        } else {
            let todo = document.querySelector("ul");
            let inputStr = document.createElement('li');
            inputStr.innerText = input.value;
            input.value =""
            inputStr.addEventListener('click', (e) => {
                e.target.style.textDecoration = "line-through";
            })
            todo.appendChild(inputStr)
        }


    })

})