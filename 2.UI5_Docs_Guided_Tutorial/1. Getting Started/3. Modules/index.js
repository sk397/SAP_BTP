// Here we are converting this js code to a module using AMD [Asyncronous module defination]
// so that i can be run async as this  improves the overall performance


// First we have the moduel take the dependencies and then the callback fucntion
// use strict of JavaScript 

// We have also removed the sap.m library defined in the html file [As dont need the full library imported everytime]
// as we are defing the dependecy here, the sap/m/button we are only importing the button dependecy that we require

sap.ui.define( ['sap/m/Button'], function(Button) {
    'use strict'

    new Button({
        text: 'Hello UI5 - Click Me',
        press: () => {
            console.log("Button Clicked");
        }
    }).placeAt('content')

})




