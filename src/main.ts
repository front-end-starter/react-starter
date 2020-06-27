/// <reference path="./@types/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PageMain } from '@/pages/main';

import { routes } from '@/router';
import { store } from '@/modules';


(async () => {
	ReactDOM.render(
		React.createElement(PageMain, { routes, store }, null),
		document.getElementById('main')
	);
})();
