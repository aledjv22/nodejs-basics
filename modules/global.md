# GLOBALS:
Global modules are many modules that come in Node.js that are included
in global modules. In NodeJS we have the global object that has methods and properties,
this is what is called global modules.
Some global modules:
- setInterval
- setImmediate
- require
- __dirname
- __filename

**IF YOU CAN AVOID USING GLOBAL VARIABLES, DO NOT USE THEM.**

This is how you declare a global variable and display it:

```javascript
global.myVariable = 'theValue';
console.log(myVariable);
```

In Node, this is an alias of global:
```javascript
this === global
```