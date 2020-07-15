/// <reference path="./@types/index.d.ts" />

import { createElement } from 'react';
import { render } from 'react-dom';

import { PageMain } from '@/pages/main';

import { routes } from '@/router';
import { store } from '@/modules';


(async () => {
	render(
		createElement(PageMain, { routes, store }, null),
		document.getElementById('main')
	);
})();
