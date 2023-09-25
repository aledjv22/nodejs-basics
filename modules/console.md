# Console
### .log:
Allows us to see something, that is, whatever we put there.

```javascript
console.log('info');
```
### .info:
Similar to **log**, but only used to inform something.

```javascript
console.info('something info');
```

### .error:
Similar to normal **log**, only some consoles paint it red to indicate that an error occurred.

```javascript
console.error('something error');
```

### .warn:
Similar to normal **log**, only some consoles paint it red to indicate that a warning occurred.

```javascript
console.warn('something warn');
```

### .table:
Displays our information in table form from an object we send it.

```javascript
let theTable = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 3,
    b: 'Another'
  },
  {
    a: 5,
    b: 'Another one'
  },
  {
    a: 1,
    b: 'A'
  },
];

console.table(theTable);
```

### .group/.groupEnd:
Allows us to group consoles but giving it an indentation in the terminal.

```javascript
console.group('group');
console.log('something log');

console.info('something info');

console.error('something error');

console.warn('something warn');
console.groupEnd('group');
```

### .count:
Allows us to make counts with the console.

```javascript
console.count('times');
console.count('times');
console.count('times');
console.count('times');
// With this you reset the count
console.countReset('times');
console.count('times');
```

### .time/.timeEnd:
Allows us to start a timer until we tell it to stop.

```javascript
console.time();
setTimeout(()=> {
  console.timeEnd();
},2000);
```