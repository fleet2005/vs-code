// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

vscode.window.showInformationMessage('Extension is running');

function activate(context) {	

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const copyStack = vscode.commands.registerCommand('vs-code.copyStack', function () {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		if(editor)
		{
		const text = editor.document.getText(editor.selection);
        vscode.env.clipboard.writeText(text);
        vscode.window.showInformationMessage('Copied into Stack');
		}
	});

	context.subscriptions.push(copyStack);

	const pasteStack = vscode.commands.registerCommand('vs-code.pasteStack', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
            const text = vscode.env.clipboard.readText();
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, text);
            });
            vscode.window.showInformationMessage('Pasted from Stack');
        }
	});

	context.subscriptions.push(pasteStack );



}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
