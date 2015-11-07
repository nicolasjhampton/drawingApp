
var palette = (function(){

  return {

    currentElement: null,

    colorValues: null,

    storeColor: function(newColor) {

      // Grab the input element that invokes this method
      this.currentElement = document.getElementById(newColor).nextElementSibling;
      console.log(document.getElementById(newColor));
      // RegEx expression for RGB CSS values
      var re = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
      // Get the bg color of the label associated with that input
      var color = window.getComputedStyle(this.currentElement).backgroundColor;
      // Split the bgcolor string
      var match = re.exec(color);

      // Reformat into pure number values, export as object
      this.colorValues = {
                          "red"  : match[1],
                          "green": match[2],
                          "blue" : match[3]
                        };

      console.log(this.colorValues);
    }

  }

}());

var canvas = (function() {

  return {
    context: document.getElementsByTagName("canvas")[0].getContext("2d")
  }

}());
