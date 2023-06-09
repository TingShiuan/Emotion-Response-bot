// Function to send user message and receive response
function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value.trim();

    if (userMessage !== "") {
        appendMessage("user", userMessage);
        userInput.value = "";

        // Call AI model or API to generate response
        var botMessage = generateBotResponse(userMessage);

        // Delay to simulate processing time (replace with actual API call if needed)
        setTimeout(function () {
            appendMessage("bot", botMessage);
        }, 500);
    }
}

// Function to generate bot response
function generateBotResponse(userMessage) {
    // Replace this with your actual AI model or API call to generate the bot response
    // For example, you can use OpenAI's GPT-3 model for natural language processing

    // Dummy response for demonstration
    return "Thank you for your message: '" + userMessage + "'. How can I assist you further?";
}

// Function to append messages to the chat log
function appendMessage(sender, message) {
    var chatLog = document.getElementById("chat-log");
    var messageElement = document.createElement("div");

    if (sender === "user") {
        messageElement.className = "message-user";
    } else if (sender === "bot") {
        messageElement.className = "message-bot";
    }

    messageElement.textContent = message;
    chatLog.appendChild(messageElement);

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}
