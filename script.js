const [input1, input2] = document.querySelectorAll("input")
const button = document.querySelector('.entry button img');

function handleChange() {
    if (input1.value && input2.value.length >= 8) {
        button.classList.add('red')
    } else {
        button.classList.remove('red')
    }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)