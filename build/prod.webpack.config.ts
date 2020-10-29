import type { Configuration } from 'webpack';

import * as Path from 'path';

import { default as TerserWebpackPlugin } from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import {
	config as common_config,
	index_html_config
} from './common.webpack.config';


const config: Configuration = merge(common_config, {
	mode: 'production',

	output: {
		filename: 'assets/scripts/[name].min.js',
		chunkFilename: 'assets/scripts/[name].[hash].min.js'
	},

	optimization: {
		minimizer: [
			new TerserWebpackPlugin({
				parallel: true
			})
		]
	},

	plugins: [
		new HtmlWebpackPlugin(Object.assign<
			HtmlWebpackPlugin.Options,
			HtmlWebpackPlugin.Options,
			HtmlWebpackPlugin.Options
		>({}, index_html_config, {
			filename: '../../index.html'
		}))
	]
});


export default config;
