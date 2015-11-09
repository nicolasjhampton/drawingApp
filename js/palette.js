/* I need to fully understand the consquences of overwriting
  __proto__ in this particular instance...*/

"use strict";

var Palette = (function(paletteInput) {

  var palette = {
    __proto__: {
                getcolor: function() {
                  return splitRGBValue(getStyles('backgroundColor'));
                }
            }
  };

  var getSelectedElement = function() {
      for (var i = 0; i < paletteInput.length; ++i) {
        if (paletteInput[i].checked === true) {
          return paletteInput[i].nextElementSibling;
        }
      }
    }

  var getStyles = function(cssProperty) {
      var el = getSelectedElement();
      console.log(el);
      var styleSheet = window.getComputedStyle(el);
      return styleSheet[cssProperty];
    }

  var splitRGBValue = function(rgbValue) {

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

  return palette;

}(document.getElementsByName('color')));
