sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */


    // The below is out order filter code
    function (Controller, Filter, FilterOperator, FilterType) {
        "use strict";

        return Controller.extend("ordersummaryapp.controller.Screen1", {
            onListPress:function(oEvent){
            var orderID = oEvent.getParameter("listItem").getBindingContext().getProperty("OrderID");

            var oFilter = new Filter("OrderID", FilterOperator.EQ, orderID);
            this.getView().byId("orderTable").getBinding("items").filter(oFilter, FilterType.Application);
          }    
        });
 }
    
    );
