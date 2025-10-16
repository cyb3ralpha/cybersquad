// Terminal JS for hacker-style command interface
class Terminal {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.initTerminal();
    }

    initTerminal() {
        // Create terminal input and output elements
        this.container.innerHTML = `
            <div class="terminal-output"></div>
            <input type="text" class="terminal-input" placeholder="Type a command..." autofocus>
        `;

        this.output = this.container.querySelector('.terminal-output');
        this.input = this.container.querySelector('.terminal-input');

        // Event listener for enter key
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = this.input.value.trim();
                this.executeCommand(command);
                this.input.value = '';
            }
        });
    }

    executeCommand(command) {
        if (!command) return;

        this.printToTerminal(`> ${command}`);

        switch (command.toLowerCase()) {
            case 'help':
                this.printToTerminal('Available commands: help, about, labs, contact');
                break;
            case 'about':
                this.printToTerminal('Cybersquad is a cybersecurity community and learning platform.');
                break;
            case 'labs':
                this.printToTerminal('Visit Labs: pages/labs.html');
                break;
            case 'contact':
                this.printToTerminal('Contact us: pages/contact.html');
                break;
            default:
                this.printToTerminal(`Command not found: ${command}`);
        }

        // Scroll to bottom
        this.container.scrollTop = this.container.scrollHeight;
    }

    printToTerminal(text) {
        const line = document.createElement('div');
        line.textContent = text;
        this.output.appendChild(line);
    }
}

// Initialize terminal on page load
document.addEventListener('DOMContentLoaded', () => {
    new Terminal('.terminal-section'); // Ensure your HTML has <div class="terminal-section"></div>
});
