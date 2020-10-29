/// <reference path="./@types/index.d.ts" />

import type { Configuration } from 'webpack';

import * as Path from 'path';


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
const config: Configuration = {

	context: Path.resolve(__dirname, '../src'),

	entry: {
		main: './main'
	},

	output: {
		path: Path.resolve(__dirname, '../dist/'),
		publicPath: '/'
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],

		plugins: [
			new TsconfigPathsPlugin()
		]
	},

	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},

			{
				test: /\.m?js$/,
				resolve: { fullySpecified: false }
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
