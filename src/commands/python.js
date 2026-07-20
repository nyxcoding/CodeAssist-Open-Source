
const commands = {
    data: {
        name: "python",
        description: "Shows a snippet of Python!",
        options: [
            {
                name: "type",
                description: "What part of Python would you like to learn?",
                type: 3, // STRING
                required: true,
                choices: [
                    {
                        name: "print",
                        value: "print"
                    },
                    {
                        name: "variables",
                        value: "variables"
                    },
                    {
                        name: "loops",
                        value: "loops"
                    }
                ]
            }
        ]
    },
    code: `
        $if[$option[type]==print;$codeBlock[
# ===== NORMAL =====
print("Hello!")
print('Hello again!')

# ===== WITH VARIABLES =====
print(varname)

# ===== WITH LISTS =====
print(len(listname))
;python]
        $setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
        $setGlobalVar[python;$math[$getGlobalVar[python]+1]]
        ;]

        $if[$option[type]==variables;
        $codeBlock[
varName = 10
varname = "Hello!"
varName = True
;python]
        $setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
        $setGlobalVar[python;$math[$getGlobalVar[python]+1]]
        ]
        $if[$option[type]==loops;$codeBlock[
# ===== FOR =====
for i in intList:
# Insert action

# ===== WHILE LOOPS =====
while 1 > 10:
# Insert action
;python]
        $setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
        $setGlobalVar[python;$math[$getGlobalVar[python]+1]]
        ]
    `,
}

module.exports = commands
