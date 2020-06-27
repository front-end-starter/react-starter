/// <reference path="./@types/index.d.ts" />

import * as Path from 'path';

import * as Webpack from 'webpack';
import PnpWebpackPlugin from 'pnp-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';


delete process.env.TS_NODE_PROJECT;


/**
 * html 入口页面公共配置
 */
const index_html_config: HtmlWebpackPlugin.Options = {
	template: Path.resolve(__dirname, '../src/main.html'),
	inject: false,
	chunks: ['main']
};


/**
 * webpack 公共配置
 */
const config: Webpack.Configuration = {

	context: Path.resolve(__dirname, '../src'),

	entry: {
		main: './main'
	},

	output: {
		path: Path.resolve(__dirname, '../dist/assets/scripts/'),
		publicPath: '/assets/scripts/',
		filename: '[name].min.js',
		chunkFilename: '[name].[hash].min.js'
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],

		plugins: [
			PnpWebpackPlugin,
			new TsconfigPathsPlugin()
		]
	},

	resolveLoader: {
		plugins: [
			PnpWebpackPlugin.moduleLoader(module),
		],
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: require.resolve('ts-loader'),
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin()
	]

};


export {
	config,
	index_html_config
};
