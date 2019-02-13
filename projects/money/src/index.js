import store from './store';
import registerWebComponent from './lib/register-web-component';


registerWebComponent({ store, name: 'my-service--user-sign-up', importComponent: () => import('./container/user-sign-up') });
registerWebComponent({ store, name: 'my-service--user-sign-in', importComponent: () => import('./container/user-sign-in')} );
registerWebComponent({ store, name: 'my-service--money-transaction-create', importComponent: () => import('./container/money-transaction-create')} );
registerWebComponent({ store, name: 'my-service--money-transaction-list', importComponent: () => import('./container/money-transaction-list')} );
registerWebComponent({ store, name: 'my-service--money-transaction-reports', importComponent: () => import('./container/money-transaction-reports')} );
registerWebComponent({ store, name: 'my-service--money-transaction-filter', importComponent: () => import('./container/money-transaction-filter')} );
registerWebComponent({ store, name: 'my-service--user-update', importComponent: () => import('./container/user-update')} );
registerWebComponent({ store, name: 'my-service--navigation', importComponent: () => import('./container/navigation')} );
registerWebComponent({ store, name: 'my-service--when-user-authenticated', importComponent: () => import('./container/when-user-authenticated')} );

