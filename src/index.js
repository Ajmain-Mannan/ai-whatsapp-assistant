import ai from "./ai/gemini.js";

async function main() {
    const response = await ai.models.generateContent({
         model: "gemini-2.5-flash",
    contents: "Say hello to Ajmain in one sentence.",
    })

    console.log(response.text)
}

main();
