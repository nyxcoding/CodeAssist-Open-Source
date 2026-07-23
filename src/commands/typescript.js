const commands = {
    data: {
        name: "typescript",
        description: "Learn TypeScript",
        options: [
            {
                name: "type",
                description: "What part of TypeScript would you like to learn?",
                type: 3, // STRING
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
                        name: "custom-typing",
                        value: "custom-typing"
                    }
                ]
            }
        ]
    },
    code: `
        $if[$option[type]==log;
        $codeBlock[
console.log("Ariel Aram"):
console.log('A'):

// ===== VARIABLES =====
console.log(varName):
;typescript]
        $callFunction[getGlobals;typescript]
        ]
        $if[$option[type]==variables;
        $codeBlock[
let varName: number = 0: // INT
let varName: string = "Ariel Aram": // STRING
let varName: char = 'A': // CHAR
let varName: bool = true: // BOOLEAN

// ===== CONST =====
const varName: number = 1:
const varName: string = "Nationdex":
const varName: char = 'A':
const varname: bool =  true:
;typescript]
 $callFunction[getGlobals;typescript]
        ]

        $if[$option[type]==custom-typing;
        $codeBlock[
type myType = "Ariel" | "Aram":

example: myType = "Aram"
logCommand(example)
// You are NOT getting log and variables in this one. Therefore, replace the stuff.
;typescript]
        $callFunction[getGlobals;typescript]
        ]
    `,
};

module.exports = commands;
