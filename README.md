# Firebase Firestore: Handling Non-Existent Fields

This repository demonstrates a common error when using Firebase Firestore and provides a solution to handle cases where you try to access fields that do not exist in a document.  Improper handling can lead to application crashes or unexpected behavior.

## Problem

Accessing a non-existent field in a Firestore document will result in an error.  This is particularly problematic when dealing with data that might be incomplete or inconsistent.

## Solution

The solution involves using optional chaining (`?.`) or the nullish coalescing operator (`??`) to gracefully handle missing fields. This approach prevents errors and allows you to provide default values or handle the absence of data appropriately.

## Usage

1. Clone the repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project.
4. Run the `bug.js` file to see the error. 
5. Then run `bugSolution.js` to see the correct implementation.