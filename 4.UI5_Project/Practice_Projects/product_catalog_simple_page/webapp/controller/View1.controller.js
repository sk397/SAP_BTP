sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("productcatalogsimplepage.controller.View1", {
            
         // Getting the input from the user entered text when they click on the submit button 
         // in the below fuction we are using this keyword to refer the view1 which is extended above
         OnPressCreateNewProduct(){
            const sProductName = this.getView().byId("UserProductEntry").getValue()
            // console.log(sProductName);
            const sCategory = this.getView().byId("CategoryID").getValue()
            // console.log(sCategory);
            const sReleaseDate = this.getView().byId("RelDate").getDateValue()
            // console.log(sReleaseDate); - The Date is not looged in console check with Instructor
            const sDiscontinuedDate = this.getView().byId("DisDate").getDateValue()

         },


         // Deleting a item from the list
         OnDelete(random){
            //Get the item from the list, we can pass any keyword to the function 
            // This is the parameter that we get when we click on Delete icon [We can see this in the list  -> delete -> Events in Ui5 Docs]
            const ItemFromList = random.getParameter("listItem")  
            // console.log(ItemFromList.mProperties.title);
            //Remove for list
            this.getView().byId("ProductList").removeItem(ItemFromList)

         }

        });
    });

