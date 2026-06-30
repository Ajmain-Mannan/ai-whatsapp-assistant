import { askGemini } from "./ai/gemini.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const rl = readline.createInterface({
    input,
    output,
  });

  while (true) {
    const prompt = await rl.question("You: ");

    if (prompt.toLowerCase() === "exit") {
      console.log("Goodbye!");
      break;
    }

    const reply = await askGemini(prompt);

    console.log(`\nGemini: ${reply}\n`);
  }
}

main();
