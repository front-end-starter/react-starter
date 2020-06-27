import type { RouteConfig as ReactRouteConfig } from 'react-router-config';


export { routes } from './routes';

/**
 * 路由配置
 */
export interface RouteConfig extends ReactRouteConfig {
	/**
	 * 受保护的
	 *
	 * default: true
	 */
	protected?: boolean;
};
