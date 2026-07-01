import { askGemini } from "./ai/gemini.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const rl = readline.createInterface({
    input,
    output,
  });
  const history = [];

  while (true) {
    const prompt = await rl.question("You: ");

    if (prompt.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
      break;
    }

    if (prompt.trim() === "") {
      continue;
    }

    history.push(`You: ${prompt}`);
    console.log(history.join("\n"));

    try {
      const reply = await askGemini(history.join("\n"));
      history.push(`Gemini: ${reply}`);
      console.log(`\nGemini: ${reply}\n`);
    } catch (error) {
      console.error("Failed to contact Gemini:", error.message);
    }
  }
}

main();
