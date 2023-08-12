const vscode = require('vscode');

const directives = [
    '#FILL',
    '#NO_FILL',
    '#FOLLOW_TONE'
    // ... add other directives if any are introduced in future versions
];

const commands = [
    '@location',
    '@time',
    '@character',
    '@interaction',
    '@story_element',
    '@color',
    '@smell',
    '@texture',
    '@taste',
    '@set',
    '@prop',
    '@camera',
    '@composition',
    '@weather',
    '@environment',
    '@post_production',
    '@audio_cue',
    '@inner_thought',
    '@flashback',
    '@voiceover',
    '@humor',
]
const system = [
    '!FUNCTION',
    '!IMPORT',
    '!MIX',
    '!CHAIN',
    '!REVIEW',
    '!REFINE',
    '!RETRY',
    '!ERROR_LOG',
    '!TRACE',
    '!HISTORY',
    '!SUGGEST',
    '!COMPARE',
    '!OUTPUT',
    '!IF',
    '!LOOP',
    '!SWITCH',
    '!RANDOM'
]


const modifiers = [
    '~tone',
    '~extra',
    '~pace',
    '~emotion',
    '~language',
    '~detailed',
    '~brief',
    '~neutral'
    // ... add other modifiers if any are introduced in future versions
];


const variables = [
    '$variable',
    '$array',
    '$matrix',
    '$object',
];
class RealityScriptCompletionProvider {
    provideCompletionItems(document, position, token, context) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);

        if (linePrefix.endsWith('@')) {
            return commands.map(cmd => {
                let item = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Method);
                item.insertText = new vscode.SnippetString(cmd.replace(/(\$\{[0-9]+:[^}]+\})/g, (m) => m)); // Maintain placeholders in command snippets
                return item;
            });
        } else if (linePrefix.endsWith('#')) {
            return directives.map(directive => new vscode.CompletionItem(directive, vscode.CompletionItemKind.Keyword));
        } else if (linePrefix.endsWith('~')) {
            return modifiers.map(modifier => new vscode.CompletionItem(modifier, vscode.CompletionItemKind.Modifier));
        } else if (linePrefix.endsWith('!')) {
            return system.map(sysCmd => new vscode.CompletionItem(sysCmd, vscode.CompletionItemKind.Function));
        } else if (linePrefix.endsWith('$')) {
            return variables.map(varDef => {
                let item = new vscode.CompletionItem(varDef, vscode.CompletionItemKind.Variable);
                item.insertText = new vscode.SnippetString(varDef.replace(/(\$\{[0-9]+:[^}]+\})/g, (m) => m)); // Maintain placeholders in variable snippets
                return item;
            });
        }

        return undefined;
    }
}


module.exports = RealityScriptCompletionProvider;
