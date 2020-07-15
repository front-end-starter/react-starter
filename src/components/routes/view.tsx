import type { FC } from 'react';
import type { Props as RoutesProps } from './index';

import { createElement } from 'react';
import {
	Switch,
	Route,
	Redirect
} from 'react-router-dom';


export interface Props extends RoutesProps {

};

export const View: FC<Props> = ({
	routes,
	extra_props = {},
	switch_props = {},
	is_sign_in = false,
	sign_in_path = '/'
}) => (
	<Switch { ...switch_props } >
		{ routes.map((route, i) => (
			<Route
				key={ route.key || i }
				path={ route.path }
				exact={ route.exact }
				strict={ route.strict }
				render={ props => {
					if (route.render) return route.render({
						...props,
						...extra_props,
						route: route
					});

					// 未登录跳转到登录页
					if (!is_sign_in && route.protected !== false) return (
						<Redirect to={ {
							pathname: sign_in_path,
							state: { from: props.location }
						} } />
					);

					// 登录后禁止访问登录页
					if (is_sign_in && route.path === sign_in_path) return (
						<Redirect to={ {
							pathname: '/',
							state: { from: props.location }
						} } />
					);

					if (typeof route.component !== 'undefined') return (
						<route.component
							{ ...props }
							{ ...extra_props }
							route={ route }
						/>
					);

					return null;
				}}
			/>
		)) }
	</Switch>
);
