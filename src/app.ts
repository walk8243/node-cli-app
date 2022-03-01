import { Command } from 'commander';
const program = new Command();

program
	.name('@walk8243/app')
	.description('Node.jsを使ってCLIアプリケーションの作成')
	.option('--first', '最初の区切りのみを表示する')
	.option('-d, --debug', 'デバッグモードで実行する')
	.option('-s, --separator <char>', 'コマンドライン引数の区切り文字を指定する', ',');

program.parse();
const options = program.opts();
console.log('options:', options);
const limit = options.first ? 1 : undefined;
console.log('arg:', program.args.map((arg) => arg.split(options.separator, limit)));
