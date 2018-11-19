'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as term from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

       console.log('java-compiler activated');

    let compile = vscode.commands.registerCommand('extension.compile', () => {
        // TODO: use settings to set it up to use relative paths :D
        // also make it not hardcoded and hacky
        term.exec('cd /Users/codewitch/Programming/Java/Test/; javac -d bin/ src/Main.java', (err, stdout, stderr) =>{
            console.error('javac = err= ' + err);
            console.log('javac = stdout= ' + stdout); // have it display some way to the user
            console.error('javac = stderr= ' + stderr);
        });


    });
    let run = vscode.commands.registerCommand('extension.run', () => {
        // TODO: use settings to set it up to use relative paths :D
        // also make it not hardcoded and hacky
        term.exec('cd /Users/codewitch/Programming/Java/Test/bin; java Main', (err, stdout, stderr) =>{
            console.error('javac = err= ' + err);
            console.log('javac = stdout= ' + stdout); // have it display some way to the user
            console.error('javac = stderr= ' + stderr);
        });

    });

    let buttonClick = vscode.commands.registerCommand('extension.buttonClick', () =>{


        vscode.commands.executeCommand('extension.compile'); // make sure this happens before running
        vscode.commands.executeCommand('extension.run');     // something something threads are wack
    });

    context.subscriptions.push(compile);
    context.subscriptions.push(run);
    context.subscriptions.push(buttonClick);
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log('java-compiler deactivated!');
}