# Import necessary libraries
import random

# Define a list of possible responses
responses = [
    "Hello! How can I help you?",
    "I'm sorry, I didn't understand that.",
    "What do you mean by that?",
    "Can you please rephrase that?",
    "I'm not sure I know the answer to that question.",
    "Let me look that up for you.",
    "Thanks for chatting with me!",
]

# Define a function to generate a response
def get_response():
    return random.choice(responses)

# Start the chatbot
print("Hello! I'm an AI chatbot. Ask me anything!")
while True:
    user_input = input("> ")
    if user_input.lower() == "quit":
        break
    else:
        response = get_response()
        print(response)
