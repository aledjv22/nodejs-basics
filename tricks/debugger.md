# Debugger

Node.js comes integrated with a debug mode so we can connect from any code inspection tool to our node.js code.

We can use the --inspect flag in the terminal.

```bash
node --inspect archive.js
```

We can apply it with nodemon in the following way:

```bash
npx nodemon --inspect archive.js
```

In order to access the chrome debugger we go to the url **[chrome://inspect/#devices](chrome://inspect/#devices "chrome://inspect/#devices")** and click inspect on the remote target you want to inspect.