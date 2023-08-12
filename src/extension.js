const vscode = require('vscode');
const autocompleteProvider = require('./autocompleteProvider');
function activate(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ language: 'realityscript', scheme: 'file' }, autocompleteProvider, '#', '~', '@', "!", "$"));
}


exports.activate = activate;

