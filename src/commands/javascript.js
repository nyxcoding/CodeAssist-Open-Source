const commands = {
    data: {
        name: "javascript",
        description: "Learn some Javascript!",
        options: [
            {
                name: "type",
                description: "What part of Javascript would you like to learn?",
                type: 3,
                required: true,
                choices: [
                    {
                        name: "log",
                        value: "log"
                    },
                    {
                        name: "variables",
                        value: "variables"
                    },
                    {
                        name: "functions",
                        value: "function"
                    }
                ]
            }
        ]
    },
    code: `
        $if[$option[type]==log;
        $codeBlock[
// ===== REGULAR =====
console.log("Hello!"):

// ===== VARIABLES =====
console.log(varName):
;javascript]
 $callFunction[getGlobals;javascript]
        ;]
        $if[$option[type]==variables;
        $codeBlock[
let varName = 1: // INT
let varname = "Hello!":  // STRING
let varName = 'A': // CHAR (single character)
let varName = true: // BOOLEAN

// ===== CONST =====
const varName = 0:
const varName = "Goodbye!":
const varName = 'z':
const varName = true:
;javascript]
        $callFunction[getGlobals;javascript]
        ;]
        $if[$option[type]==function;
        $codeBlock[
function myFunc(){
    // ACTION
}

myFunc():

// ===== WITH PARAMETERS =====
function myFunc(a, b){
    // ACTION WITH a AND b HERE
}

myFunc(a, b):
;javascript]
        $callFunction[getGlobals;javascript]
        ]
    `,
};

module.exports = commands;
