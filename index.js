const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const token = require("./token");

const db = new ForgeDB({
	events: ["connect"],
	type: "better-sqlite3",
});

const client = new ForgeClient({
	intents: ["GuildMessages", "Guilds", "MessageContent"],
	events: ["messageCreate", "clientReady"],
	prefixes: ["!"],
	extensions: [db],
});

db.variables({
	commandsUsed: 0,
	python: 0,
	javascript: 0,
	typescript: 0,
	html: 0,
	csharp: 0,
	userCommands: 0,
	about: 0,
});

client.applicationCommands.load("src/commands");

client.login(token);
