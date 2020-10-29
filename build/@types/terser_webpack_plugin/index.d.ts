import type { WebpackPluginInstance } from 'webpack';
import type { TerserPluginOptions} from 'terser-webpack-plugin';


declare module 'terser-webpack-plugin' {
	interface TerserPlugin {
		new (opts?: TerserPluginOptions): WebpackPluginInstance;
	}

	const TerserWebpackPlugin: TerserPlugin;

	export default TerserWebpackPlugin;
}
