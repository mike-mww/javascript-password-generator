import '@fortawesome/fontawesome-free/js/all';
import { generatePassword } from './js/generator';
import './css/main.css';

// #anchor Locals
const lengthEl      = document.getElementById('password-length');
const lowercaseEl   = document.getElementById('password-lowercase');
const uppercaseEl   = document.getElementById('password-uppercase');
const numbersEl     = document.getElementById('password-numbers');
const symbolsEl     = document.getElementById('password-symbols');
const generateBtn   = document.getElementById('generate-btn');
const resultEl      = document.getElementById('result');
const copyBtn       = document.getElementById('copy-btn');


// #anchor Event listeners
generateBtn.addEventListener('click', () => {
	const length        = +lengthEl.value;
	const useLowercase  = lowercaseEl.checked;
	const useUppercase  = uppercaseEl.checked;
	const useNumbers    = numbersEl.checked;
	const useSymbols    = symbolsEl.checked;
    
    const result = generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols);
    
    if (result) {
        resultEl.innerText = result;
    
        if (!resultEl.parentElement.classList.contains('active')) {
            resultEl.parentElement.classList.add('active');
        }
    }
});

copyBtn.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) return;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();

    alert('Password has been copied to the clipboard.');
});