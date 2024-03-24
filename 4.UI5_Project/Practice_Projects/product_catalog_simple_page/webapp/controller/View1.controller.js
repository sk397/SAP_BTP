sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/core/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    // When we create an new object with new keyword, we have to pass it to the callback function so that i can used in the function
    function (Controller, ObjectListItem, ObjectAttribute, ObjectStatus, ValueState) {
        "use strict";

        return Controller.extend("productcatalogsimplepage.controller.View1", {
            
         // Getting the input from the user entered text when they click on the submit button 
         // in the below fuction we are using this keyword to refer the view1 which is extended above
         OnPressCreateNewProduct(){
            const sProductName = this.getView().byId("UserProductEntry").getValue()
            // console.log(sProductName);
            const sCategory = this.getView().byId("CategoryID").getValue()
            console.log(sCategory);
            const sPrice = this.getView().byId("UserEnteredPrice").getValue()
            // console.log(sPrice);
            const sReleaseDate = this.getView().byId("RelDate").getDateValue()
            // console.log(sReleaseDate); - The Date is not looged in console check with Instructor
            const sDiscontinuedDate = this.getView().byId("DisDate").getDateValue()

        


        // Adding Logic to add more items to the list
        // Since we are creating a new object from the ObjectListitem we have added it to the function parameters
        // We also create a new ObjectAttribute, as its a seperate item inside the ObjectListItem
        // And Inside attributes array we have two ObkectAttributes
        this.getView().byId("ProductList").addItem(new ObjectListItem ({
            title: sProductName,
            number: sPrice,
            numberUnit: "USD",
            attributes: [
                new ObjectAttribute ({title: "Category", text:sCategory}),
                new ObjectAttribute ({title: "Release Date" , text:sReleaseDate}),
                new ObjectAttribute ({title: "Discontinued Date" , text:sDiscontinuedDate}),
                // Just need the date and not the timestamp check with Instructor
            ],

            firstStatus: new ObjectStatus ({
                text: this._AvailablityDate(sDiscontinuedDate),
                state: this._getAvailabilityState(sDiscontinuedDate)
            })
        }));

         },


         //Checking the avilablity of the product [If the selected date is greater than discontined than avilable if not not avilable]
          _AvailablityDate(odate){
            return odate > new Date() ? "Available" : "Not Available"

          },

          //Getting the availablity status
          _getAvailabilityState(odate) {
            return odate > new Date() ? ValueState.Success : ValueState.Error
          },

          // The Color coding is not getting changed check with Instructor



         // Deleting a item from the list
         OnDelete(random){
            //Get the item from the list, we can pass any keyword to the function 
            // This is the parameter that we get when we click on Delete icon [We can see this in the list  -> delete -> Events in Ui5 Docs]
            const ItemFromList = random.getParameter("listItem")  
            // console.log(ItemFromList.mProperties.title);
            //Remove for list
            this.getView().byId("ProductList").removeItem(ItemFromList)

         },

      
           


        });
    });

