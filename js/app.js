"use strict";

var palette = (function(){

  return {

    paletteInput: document.getElementsByName('color'),

    currentColorValues: null,

    getCheckedRadioBox: function() {
      for (var i = 0; i < this.paletteInput.length; ++i) {
        if (this.paletteInput[i].checked === true) {
          return this.paletteInput[i];
        }
      }
    },

    getCurrentLabelStyles: function() {
      var currentLabel = this.getCheckedRadioBox().nextElementSibling;
      return window.getComputedStyle(currentLabel);
    },

    setColor: function() {

      // RegEx expression for RGB CSS values
      var re = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

      // Get the CSS stylelist of the label associated with checked input
      var elStyles = this.getCurrentLabelStyles();
      // Split the bgcolor string for that element
      var match = re.exec(elStyles.backgroundColor);

      // Reformat into pure number values, export as object
      this.currentColorValues = {
                          "red"  : match[1],
                          "green": match[2],
                          "blue" : match[3]
                        };

      console.log(this.currentColorValues);
    }

  }

}());

var canvas = (function() {

  return {
    context: document.getElementsByTagName("canvas")[0].getContext("2d")
  }

}());
