function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() === '') {
        return;
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `<div class="message-content">${userInput.value}</div>`;
    chatBox.appendChild(userMessage);

    // Clear input
    const userText = userInput.value.toLowerCase();
    userInput.value = '';

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';

        // Determine bot's response
        if (userText === 'hello') {
            botMessage.innerHTML = `<div class="message-content"><a href="https://www.youtube.com" target="_blank">Check out this link to YouTube</a></div>`;
        } 
        else if (userText === 'how do i order bikes?') {
            botMessage.innerHTML = `<div class="message-content">Click the link below and scroll throught the available bikes.<a href="/home/mrbeast/UIDDDD/Bike_Rental/proj/index.html" target="_blank">Click here</a></div>`;
        }else {
            botMessage.innerHTML = `<div class="message-content">You said: ${userText}</div>`;
        }

        chatBox.appendChild(botMessage);

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
