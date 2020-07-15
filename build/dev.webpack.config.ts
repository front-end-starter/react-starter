import type { Configuration } from 'webpack';

import * as Path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import { config as common_config, index_html_config } from './common.webpack.config';


const config: Configuration = merge(common_config, {

	mode: 'development',

	devtool: 'cheap-module-source-map',

	output: {
		filename: '[name].js',
		chunkFilename: '[name].[hash].js'
	},

	devServer: {
		host: '0.0.0.0',
		port: 80,
		useLocalIp: true,
		//contentBase: Path.resolve(__dirname, '../dist/'),
		//publicPath: '/assets/scripts/',
		index: 'index.html',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/g, to: '/assets/scripts/index.html' }
			]
		},
		hot: true,
		//writeToDisk: true,
		watchOptions: {
			ignored: ['node_modules']
		},
		stats: 'minimal',
		clientLogLevel: 'silent'
	},

	plugins: [
		new HtmlWebpackPlugin(Object.assign<
			HtmlWebpackPlugin.Options,
			HtmlWebpackPlugin.Options,
			HtmlWebpackPlugin.Options
		>({}, index_html_config, {
			filename: 'index.html'
		}))
	]

});


export default config;
