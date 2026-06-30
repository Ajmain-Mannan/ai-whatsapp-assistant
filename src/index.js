import { askGemini } from "./ai/gemini.js";

async function main() {
   const reply = await askGemini("Say Hello to Ajmain in one sentence.");
   console.log(reply);
}

main();
