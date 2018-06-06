"use strict";

//setup to add event listeners
window.onload = function() {
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
}

//MSUBears
function MSUBears() {
  var result = "";
  for (var i = 1; i < 101; i++) {
    if (i % 3 == 0) {
      if (i % 5 == 0) result += "MSUBears<br>";
      else result += "MSU<br>";
    }

    else if ( i % 5 == 0) result += "Bears<br>";

    else{
      result += i;
      result += "<br>";
    }
  }
  document.getElementById('results').style.fontSize = '1em';
  document.getElementById('results').innerHTML = result;
}

//File operation
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.
  var reader = new FileReader();
  reader.onload = function(event) {
       var text = event.target.result;
       test(text);

  }
  reader.readAsText(files[0],"UTF-8");
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function test(text) {
  //console.log(lines);
  var lines = text.split('\n');
  //console.log(lines[0]);
  var firstLn = lines[0];
  firstLn = firstLn.toLowerCase();
  var words = firstLn.split(' ');
  var containsBears = false;

  for (var i = 0; i < words.length; i++) {
    //console.log(words[i]);
    if (words[i] == "bears") containsBears = true;
  }

  var result;
  if (containsBears) result = "Yes!";
  else result = "No.";

  result = "Does the first line of the file contain the word bears?<br>" + result;

  //console.log(containsBears);
  document.getElementById('results').style.fontSize = '2em';
  document.getElementById('results').innerHTML = result;
}

//Fibo
function fibo(n){
  if(n > 15) return "NUMBER TOO BIG!"
  if(n == 0) return 1;
  else if(n == 1) return 1;
  else return fibo(n - 1) + fibo(n - 2);
}

function fiboHelper() {
  var result;
  var n = document.getElementById('n-holder').value;
  result = fibo(n);
  //console.log(result);
  document.getElementById('results').style.fontSize = '3em';
  document.getElementById('results').innerHTML = result;
}
