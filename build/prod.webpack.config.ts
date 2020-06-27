import * as Path from 'path';

import * as Webpack from 'webpack';
import MergeWebpackPlugin from 'webpack-merge';
import { default as TerserWebpackPlugin } from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import {
	config as common_config,
	index_html_config
} from './common.webpack.config';


const config: Webpack.Configuration = MergeWebpackPlugin(common_config, {
	mode: 'production',

	output: {
		filename: '[name].[hash].min.js',
		chunkFilename: '[name].[hash].min.js'
	},

	optimization: {
		minimizer: [
			new TerserWebpackPlugin({
				parallel: true,
				sourceMap: false
			}),

			/*new OptimizeCssAssetsPlugin({
				cssProcessorPluginOptions: {
					preset: [
						'default',
						{
							discardComments: {
								removeAll: true
							}
						}
					]
				}
			})*/
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
