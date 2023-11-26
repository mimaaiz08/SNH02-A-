const response = {
    "hello": ["Hello, how can i help you?"],
    "i feel (.*)": ["Why do you feel {}?", "How long have you been feeling {}?"],
    "i am (.*)": ["Why do you say you're {}?", "How long have you been{}?"],
    "i'm (.*)": ["Why are you {}?", "How long have you been {}?"],
    "i (.*) you": ["Why do you {} me?", "What makes you think you {} me"],
    "i (.*) myself": ["Why do you {} yourself?", "What makes you think {} yourself"],
    "(.*) sorry (.*)": ["There is no need to apologize.", "Wnat are you apologizeing for?"],
    "(.*) friend (.*)": ["Tell me more about your friend.", "How to your friends make you feel?"],
    "yes": ["You seen quiet sure.", "ok, but can you elaborate."],
    "no": ["Why not?", "Ok, but can you elaborate a bit?"],
    " (.*) ": ["Please tell me more.", "Let's change focus a bit... tell me about your family.", "Can you elaborate on that?"],
    "": ["Why do you think that?", "Please tell me more.", "let's change focus a bit... tell me about your family.", "Can you elaborate on that?"],
};

function match_response(input_text) {
    for (let pattern in response) {
        const response_list = response[pattern];
        const matches = input_text.toLowerCase().match(pattern);
        if (matches) {
            const chosen_response = response_list[Math.floor(Math.random() * response_list.length)];
            return chosen_response.replace("{}", matches[1]);
        }
    }
    return "I'm sorry I don't understand what you're saying.";
}

console.log("Welcome to the AURUMBOT");
while (true) {
    const user_input = prompt("You:");
    if (user_input.toLowerCase() === "bye") {
        console.log("Aurumbot:Goodbye.");
        break;
    } else {
        console.log("Aurumbot:" + match_response(user_input));
    }
}


