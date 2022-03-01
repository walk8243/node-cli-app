import { Command } from 'commander';
import { spawn } from 'child_process';
const program = new Command();

program
	.name('@walk8243/app')
	.description('Node.jsを使ってCLIアプリケーションの作成')
	.version('1.0.0', '-V, --version', 'バージョンを表示する')
	.helpOption('-h, --help', 'ヘルプを表示する');

program
	.option('--first', '最初の区切りのみを表示する')
	.option('-d, --debug', 'デバッグモードで実行する')
	.option('-s, --separator <char>', 'コマンドライン引数の区切り文字を指定する', ',')
	.action((options) => {
		console.log('options:', options);
		const limit = options.first ? 1 : undefined;
		console.log('arg:', program.args.map((arg) => arg.split(options.separator, limit)));
	});

program.command('graph')
	.action(() => {
		const git = spawn('git', [ 'log', '--graph', '--date=short', '--pretty=%C(yellow)%h %C(cyan)%ad %C(green)%an%Creset%x09%s %C(red)%d%Creset' ], { stdio: 'inherit' });
		git.on('exit', () => {});
	});

program.parse();
