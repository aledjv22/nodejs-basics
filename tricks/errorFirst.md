# Error First Callbacks

A pattern that is always followed in any language and developer program is **Error First Callbacks**, which means that whenever we have a callback, the first parameter should be the error.

😭 This is used because of the convention that everything can fail.

Another typical pattern is to have the callback as the last function that is passed. Although it depends on the case.

```javascript
function asyncFunction(callback) {
  setTimeout(() => {
    try {
      let a = 3 + w;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asyncFunction((err, data) => {
  if (err) {
    console.error('We have an error');
    console.error(err);
    return false;

    // throw err;
  }

  console.log(`Everything went well, my data is ${data}`);
});
```
