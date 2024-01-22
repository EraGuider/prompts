document.addEventListener('DOMContentLoaded', loadPrompts);

function addPrompt() {
    let prompt = document.getElementById('newPrompt').value;
    if (prompt) {
        savePrompt(prompt);
        displayPrompt(prompt);
        document.getElementById('newPrompt').value = ''; // 清空输入框
    }
}

function savePrompt(prompt) {
    let prompts = JSON.parse(localStorage.getItem('prompts')) || [];
    prompts.push(prompt);
    localStorage.setItem('prompts', JSON.stringify(prompts));
}

function loadPrompts() {
    let prompts = JSON.parse(localStorage.getItem('prompts')) || [];
    prompts.forEach(prompt => {
        displayPrompt(prompt);
    });
}

function displayPrompt(prompt) {
    let container = document.getElementById('promptContainer');
    let card = document.createElement('div');
    card.classList.add('card');
    card.textContent = prompt;
    container.appendChild(card);
}
