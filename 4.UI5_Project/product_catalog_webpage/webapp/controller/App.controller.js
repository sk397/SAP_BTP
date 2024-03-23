sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/ObjectListItem",
        "sap/m/ObjectAttribute",
        "sap/m/ObjectStatus",
        "sap/ui/core/ValueState"
    ],
    function(BaseController, ObjectListItem, ObjectAttribute, ObjectStatus, ValueState) {
      "use strict";
  
      return BaseController.extend("productcatalogwebpage.controller.App", {
       
        //Submit button 
        OnPressCreateNewProduct(){
        //Get the product name from the input
          const sProductName = this.getView().byId("idProductName").getValue()
          const oCategory = this.getView().byId("idCategory").getSelectedItem()
          const sPrice = this.getView().byId("IdPrice").getValue()
          const sReleaseDate = this.getView().byId("release").getDateValue()
          const sDiscontinueDate = this.getView().byId("discontinued").getDateValue()


        // Add a new item to the list
        this.getView().byId("idProductList").addItem(new ObjectListItem ({
          title: sProductName,
          number : sPrice,
          numberUnit: "Dollars",
          attributes: [
            new ObjectAttribute ({title: "Category", text: oCategory.getText()}),
            new ObjectAttribute ({title: "Release Date", text: sReleaseDate}),
            new ObjectAttribute ({title: "Discontinued Date", text: sDiscontinueDate})
          ],
          firstStatus: new ObjectStatus({
            text: this._getAvailablityText(sDiscontinueDate),
            state: this._getAvailablityState(sDiscontinueDate)

          })

        }))
          
        },

        OnPressDelete(oEvent){
          const OItem = oEvent.getParameter("listItem")

          //Remove the item from list
          this.getView.byId("idProductList").removeItem(OItem)
        },


        // Set the product to be available is the discontinued date is grater than current date
        _getAvailablityText(oDate) {
          return oDate > new Date() ? "Available" : "Unavailable"
        },

        _getAvailablityState(oDate){
          return oDate > new Date() ? ValueState.Success : ValueState.Error
        }


        

      });
    }
  );
  