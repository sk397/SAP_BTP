/*global QUnit*/

sap.ui.define([
	"order_summary_app/controller/Screen1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Screen1 Controller");

	QUnit.test("I should test the Screen1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
