const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question("Please enter your name: ", (name) => {
    console.log("Hello " +name +"!");
    interface.close();
});

interface.on("close", () => {
   console.log("Process: EXIT");
   process.exit(0);
});