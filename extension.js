// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	//打开默认浏览器
const openDefaultBrowser = function (url) {
	var exec = require('child_process').exec;
	console.log(process.platform)
	switch (process.platform) {
	  case "darwin":
		exec('open ' + url);
		break;
	  case "win32":
		exec('start ' + url);
		break;
	  default:
		exec('xdg-open', [url]);
	}
  }
  openDefaultBrowser(vscode.window.activeTextEditor.document.fileName)
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
