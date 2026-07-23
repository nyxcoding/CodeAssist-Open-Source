# CodeAssist-Open-Source
This is the OFFICIAL CodeAssist source code, made by `nyxcoding`.

How to run the bot? It's simple!

```bash
npm install
cp token.example.js token.js
npm run start
```

Or do like me, use Batch.

```batch
npm install
copy token.example.js token.js
./run.bat
```

If you want the complicated route, its difficult.
- First, change the .bat content from your start file to your project, like if you start at `C:/users/USERNAME/` and your PATH for prject is `C:/users/USERNAME/Codes/BOT`, enter the path AFTER what you start in. so in this case it would be `node Codes/BOT/index.js`.
- Then add your project folder to your PATH, done in environment variables
- Then in the file name you begin in, just do run 
Really simple, i know!

And if you are having any issues on the code, just run typecheck solutions.

```bash
npm run typecheck
```

To add a command, create a new file in `src/commands` and enter the command code inside
The command code should look like this:

```javascript
commands = {
  data: {
    ...
  },
  code: `...`
}
module.exports = commands;
```

Happy coding!
