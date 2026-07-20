const commands = {
  data: {
    name: "about",
    description: "About the bot!",
  },
  code: `
    $setGlobalVar[commandsUsed;$math[$getGlobalVar[commandsUsed]+1]]
    $setGlobalvar[about;$math[$getGlobalVar[about]+1]]

    $addField[
    About CodeAssist!;
    <@$userID> The best code assistant bot out there, being the only one!

    Please note, in all cases requiring a Semi-Colon, for forgescript punctuality, will be replaced with:
    Placeholders will be put in place for code commands.
    **Version:** 1.1.3

    **Commands used:** $getGlobalVar[commandsUsed]

    **Python used:** $getGlobalVar[python]

    **JavaScript used:** $getGlobalVar[javascript]

    **TypeScript used:** $getGlobalVar[typescript]

    **HTML used:** $getGlobalVar[html]

    **About used:** $getGlobalVar[about]
    ]

    $color[Navy]
    $author[DISPLAY_NAME      USERNAME       Made in BotForge]
  `,
}

module.exports = commands
