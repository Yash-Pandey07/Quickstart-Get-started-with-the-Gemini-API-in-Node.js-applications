const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY)

const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//console.log(model)
//Gemini model to get text response in console
/* async function run(){
    //  comment the above model line if you are using it
        const model = genAI.getGenerativeModel({model:"gemini-pro"})
    //  Enter your prompt here and get respose in console
        const prompt = "Explain complete data structures and algorithms for a 15 years old to understand it completely .Try using easy examples for each part."
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()
        console.log(text)
    }
run()
*/
// Generate text from text-and-image input (multimodal)
/*
const fs = require('fs')
// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }
  
  async function run() {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  
    const prompt = "What's different between these pictures?";
  
    const imageParts = [
      fileToGenerativePart("image5.png", "image/png"),
      fileToGenerativePart("image3.jpg", "image/jpeg"),
      fileToGenerativePart("image4.jpg", "image/jpeg"),
    ];
  
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  run()
  */
 //Build multi-turn conversations (chat)
/*
async function run() {
// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const chat = model.startChat({
    history: [
    {
        role: "user",
        parts: "Hello, I have 2 dogs in my house.",
    },
    {
        role: "model",
        parts: "Great to meet you. What would you like to know?",
    },
    ],
    generationConfig: {
    maxOutputTokens: 100,
    },
});

const msg = "How many paws are in my house?";

const result = await chat.sendMessage(msg);
const response = await result.response;
const text = response.text();
console.log(text);
}
run();
*/
 