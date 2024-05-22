// Import the remote module
const remote = require('electron').remote;

// Function to run the code
function runCode() {
  const mainWindow = remote.getCurrentWindow();
  const htmlCode = mainWindow.document.getElementById("html-code").value;
  const cssCode = "<style>" + mainWindow.document.getElementById("css-code").value + "</style>";
  const jsCode = "<script>" + mainWindow.document.getElementById("js-code").value + "</script>";

  const preview = mainWindow.document.getElementById("preview").contentWindow.document;

  preview.open();
  preview.write(htmlCode + cssCode + jsCode);
  preview.close();
}

// Event listener for the Run button
document.getElementById("run-btn").addEventListener("click", runCode);

// Function to export the code
function exportCode() {
  const mainWindow = remote.getCurrentWindow();
  const htmlCode = mainWindow.document.getElementById("html-code").value;
  const cssCode = mainWindow.document.getElementById("css-code").value;
  const jsCode = mainWindow.document.getElementById("js-code").value;

  // You can implement your export functionality here, such as saving the code to a file or copying it to the clipboard
  // For demonstration purposes, let's just log the code to the console
  console.log("HTML Code:");
  console.log(htmlCode);
  console.log("CSS Code:");
  console.log(cssCode);
  console.log("JavaScript Code:");
  console.log(jsCode);
}

// Event listener for the Export button
document.getElementById("export-btn").addEventListener("click", exportCode);