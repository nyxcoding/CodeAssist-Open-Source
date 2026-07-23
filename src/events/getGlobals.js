events = {
    name: "getGlobals",
    description: "Gets global variables.",
    params: [
        {
            name: "mainVar",
            description: "Sets the main variable.",
            type: "String",
            required: true,
            rest: false
        }
    ],
    brackets: true,
    code: `
        $setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
        $setGlobalVar[$env[mainVar];$math[$getGlobalVar[$env[mainVar]]+1]]
        $setUserVar[userCommands;$math[$getUserVar[userCommands]+1]]
    `,
};

module.exports = events;
