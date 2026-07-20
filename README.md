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
