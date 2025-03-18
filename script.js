const schedInput = document.getElementById('schedInput');
const lettersDisplay = document.getElementById('letters');
const maxLength = 50;

schedInput.addEventListener('input', () => {
    const length = schedInput.value.length;
    const remaining = maxLength - length;
    lettersDisplay.textContent = `Letters: ${length} Maximum: ${remaining}`;
});
