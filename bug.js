The Firebase SDK might throw an error if you try to access a field that doesn't exist in your Firestore document.  For example, if you have a document with a field called `name` but try to access a field called `age` which doesn't exist, you will get an error. This is common, but can be easily avoided using optional chaining or the nullish coalescing operator.