"use strict";

var Palette = (function(paletteInput) {

  var selected;

  for (var i = 0; i < paletteInput.length; i++) {
    console.log(getStyles(paletteInput[i].nextElementSibling));
    paletteInput[i].addEventListener('click', function() {
      selected = window.getComputedStyle(this.nextElementSibling);
    });
  }

  function splitRGBValue(rgbValue) {

      // RegEx expression for RGB CSS values
      var re = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;

      // Split the bgcolor string for that element
      var match = re.exec(rgbValue);

      // Reformat into pure number values, export as object
      return {
                "red"  : match[1],
                "green": match[2],
                "blue" : match[3]
              };

    }

  return {
    getColor: function () {
      return splitRGBValue(selected.backgroundColor);
    }
  };

}(document.getElementsByName('color')));
