// Again we define the dependecies and fucntion
// Pass the XMLView Dependecy file and the XMLView module as a function 
// the XMLCreate.view  reuturns a promise that we can use in the fcuniton


sap.ui.define(['sap/ui/core/mvc/XMLView'], function (XMLView) {
    'use strict';
  
    XMLView.create({
      viewName: 'ui5.product.list.view.App'
    }).then(function (oView) {
      oView.placeAt('content');
    });
  });