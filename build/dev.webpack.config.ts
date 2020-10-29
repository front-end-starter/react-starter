import type { Configuration } from 'webpack';

import * as Path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import { config as common_config, index_html_config } from './common.webpack.config';


const config: Configuration = merge(common_config, {

	mode: 'development',

	devtool: 'cheap-module-source-map',

	output: {
		filename: 'assets/scripts/[name].js',
		chunkFilename: 'assets/scripts/[name].[hash].js'
	},

	devServer: {
		host: '0.0.0.0',
		port: 80,
		useLocalIp: true,
		disableHostCheck: true,
		publicPath: '/',
		index: 'index.html',
		historyApiFallback: {
			rewrites: [
				{ from: /.*/g, to: '/index.html' }
			]
		},
		hot: true,
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
