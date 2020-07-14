import type { RouteConfig } from '@/router';

import { createElement } from 'react';
import { Redirect } from 'react-router-dom';

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
	},

	{
		path: '*',
		exact: true,
		render: () => createElement(Redirect, { to: '/' }, null)
	}
];
