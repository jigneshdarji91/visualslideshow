function item() {
    var name = {};
    var children = {};
}
function whitespaceCalc(string) {
  return string.search(/\S|$/);
}
function textToJSON(){
  var userInput = document.getElementById("userInput").value;
  userInput = userInput.split("\n");
  var jsonObject = new item();
  jsonObject.name = (document.getElementById("chart_title").value);
  console.log("Chart Title: " + jsonObject);
  var prevDepth = 0;
  var prev = new item();
  for (var i = 0; i < userInput.length; i++) {
    var whitespace = whitespaceCalc(userInput[i]);
  }
  console.log("Input: " + userInput);
}
