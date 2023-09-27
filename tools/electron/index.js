// Import the necessary modules from Electron
const { app, BrowserWindow } = require('electron');

// Declare a variable to hold the main window
let mainWindow;

// Listen for the 'ready' event and call the createWindow function
app.on('ready', createWindow);

// Define the createWindow function
function createWindow() {
  // Create a new BrowserWindow object and assign it to the mainWindow variable
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Load the index.html file into the mainWindow
  mainWindow.loadFile('index.html');
}