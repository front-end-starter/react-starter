import type { RouteConfig } from '@/router';

import loadable from '@loadable/component';


export const routes: RouteConfig[] = [
	{
		path: '/',
		exact: true,
		component: loadable( () => import('@/pages/home') )
	},

	{
		path: '/sign_in',
		component: loadable( () => import('@/pages/sign_in') ),
		protected: false
	}
];
