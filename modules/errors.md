# Errors (try/catch)
The **try/catch** is used to know if there is an error or not, and to be able to modify the error output.

```javascript
try {
  breakIt();
} catch (error) {
  console.error('Oops, something broke...');
  console.error(error.message);
}
```

The app has crashed when we tried with an Async function.

```javascript
function breakItAsync() {
  setTimeout(() => 3 + z);
}

try {
  breakItAsync();
} catch (error) {
  console.error('Oops, something broke...');
  console.error(error.message);
}
```

To prevent this from happening, we have to do the **try/catch** inside the function.

```javascript
function breakItAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      cb(error);
    }
  })
}

try {
  breakItAsync((error) => console.error(error.message))
} catch (error) {
  console.error('Oops, something broke...');
  console.error(error.message);
}
```