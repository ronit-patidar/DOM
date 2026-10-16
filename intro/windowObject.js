// Window Object in JavaScript
// The window object is the global object in JavaScript when running in a browser.
// It represents the browser window or tab and provides access to browser-related features.

// Key Points

// It is created automatically by the browser.
// All global variables, functions, and objects are part of window.
// You can access it directly using window or even without writing window.
// 👉 Window object = Browser window + global JavaScript environment
// eg
// var x=10;
// console.log(x);

// Common Properties & Methods
// 1. Global Variables & Functions
// alert("Hello");        // same as window.alert()
// console.log("Hi");     // same as window.console.log()

// 2. Browser Information
// window.innerWidth;     // width of browser window
// window.innerHeight;    // height of browser window

// 3. Location (URL related)
// window.location.href;  // current URL

// 4. Document Object
// window.document;       // access HTML document

// 5. Timing Functions
// setTimeout(() => {
//   console.log("Executed");
// }, 1000);

// or window.setTimeout(()={
//   console.log("Executed");
// },1000)

// Important Note
// window === this; // true (in global scope)