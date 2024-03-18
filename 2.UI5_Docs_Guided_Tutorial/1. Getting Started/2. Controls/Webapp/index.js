// Button with text , and placed at id content
new sap.m.Button('idMyButton', {
    text: 'Hello UI5',
    }
).placeAt('content')


// Button with a click fuction
new sap.m.Button('idMyButton1', {
    text: 'Hello UI5 - Click Me',
    press: () => {
        console.log("Button Clicked");
    }
}).placeAt('content')