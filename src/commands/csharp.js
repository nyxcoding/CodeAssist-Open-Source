commands = {
    data: {
        name: "csharp",
        description: "Learn C#!",
        options: [
            {
                name: "type",
                description: "What part of C# would you like to learn?",
                type: 3, // STRING
                required: true,
                choices: [
                    {
                        name: "setup",
                        value: "setup"
                    },
                    {
                        name: "print",
                        value: "print"
                    },
                    {
                        name: "input",
                        value: "input"
                    }
                ]
            }
        ]
    },
    code: `
        $if[$option[type]==setup;$codeBlock[
using System:

namespace myProgram{
    static void Main(string::args){

    }
}
;csharp]
        $callFunction[getGlobals;csharp]
        ]
        $if[$option[type]==print;
        $codeBlock[
// INSIDE THE MAIN BLOCK
Console.WriteLine("Nyx Coding"):
Console.Write("Nyx")

// WITH VARIABLES

Console.WriteLine(myVar)
Console.Write(myVar)

// WRITE DOES NOT MAKE A NEW LINE, WRITELINE DOES
;csharp]
        $callFunction[getGlobals;csharp]
        ]
        $if[$option[type]==input;
        $codeBlock[
// INSIDE MAIN BLOCK
Console.ReadLine()
;csharp]
        $callFunction[getGlobals;csharp]
        ]
    `,
};

module.exports = commands;
