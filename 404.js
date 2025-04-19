async function createPortal() {
    let x = Math.random() * window.innerWidth + 'px';
    let y = Math.random() * window.innerHeight + 'px';

    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        createChar(x, y);
    }
}

function createChar(x, y) {
    const char = document.createElement('div');
    char.className = 'char';
    char.textContent = randomChar();
  
    // Random position
    char.style.left = x;
    char.style.top = y;
  
    document.body.appendChild(char);
  
    // Remove after animation
    setTimeout(() => {
      char.remove();
    }, 2000);
}
  
function randomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    return chars[Math.floor(Math.random() * chars.length)];
}
  
// Generate characters every 100ms
setInterval(createPortal, 30);
  