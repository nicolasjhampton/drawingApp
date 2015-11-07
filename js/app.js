"use strict";

var Palette = (function(){

  var palette = {};

  // Palette UI nodes
  var paletteInput = document.getElementsByName('color');

  // RegEx expression for RGB CSS values
  var re = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

  var currentLabelSelected = null;

  // Color last selected in array format: [r,g,b]
  var currentColorValues = null;

  function getSelectedLabel() {
    for (var i = 0; i < paletteInput.length; ++i) {
      if (paletteInput[i].checked === true) {
        currentLabelSelected = paletteInput[i].nextElementSibling;
        break;
      }
    }
  }

  function getSelectedLabelStyles() {
    return window.getComputedStyle(currentLabelSelected);
  }

  palette.getColor = function() {
    return "rgb(" + currentColorValues['red'] + ", " + currentColorValues['green'] + ", " + currentColorValues['blue'] + ")";
  }

  palette.setColor = function() {

    // Store the currently selected label
    getSelectedLabel();
    // Get the CSS stylelist of the label associated with checked input
    var elStyles = getSelectedLabelStyles();
    // Split the bgcolor string for that element
    var match = re.exec(elStyles.backgroundColor);

    // Reformat into pure number values, export as object
    currentColorValues = {
                        "red"  : match[1],
                        "green": match[2],
                        "blue" : match[3]
                      };

    console.log(currentColorValues);
  }

  return palette;

}());



var canvas = (function() {

  return {
    context: document.getElementsByTagName("canvas")[0].getContext("2d")
  }

}());
