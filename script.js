const lines = document.querySelectorAll('.line');
let i = 0;

function typeLine() {
  if (i < lines.length) {
    const line = lines[i];
    const text = line.textContent;
    line.textContent = '';
    let j = 0;
    const interval = setInterval(() => {
      if (j < text.length) {
        line.textContent += text[j];
        j++;
      } else {
        clearInterval(interval);
        i++;
        typeLine();
      }
    }, 50);
  }
}

typeLine();
