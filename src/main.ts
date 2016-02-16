import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {AppCmp} from './app/components/app';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
  FIREBASE_PROVIDERS,
  // Change this to your own Firebase!
  defaultFirebase('https://static-showdown-seed.firebaseio.com/')
]);

// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ',    registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
