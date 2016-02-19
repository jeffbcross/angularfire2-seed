# AngularFire 2 Seed for Static Showdown

This project has everything needed to get started building an Angular 2 app with Firebase.

This is a fork of the popular [angular2-seed](https://github.com/mgechev/angular2-seed) by @mgechev and other contributors.
Refer to that repository for more advanced topics.

 * Refer to http://angular.io for guides and API reference for Angular 2
 * Refer to https://github.com/angular/angularfire2 for reference for AngularFire2
 * Refer to https://www.firebase.com/docs/web/ for docs on using Firebase for Web apps
 * Refer to http://www.typescriptlang.org/Tutorial to learn how to use TypeScript

## Caution!

This project uses several projects that are in beta or alpha (Angular 2 beta, AngularFire2 Alpha, RxJS 5 beta).
Only those with a taste for adventure and maybe a few bugs should proceed.

If you run into issues, feel free to tweet at [@jeffbcross](https://twitter.com/jeffbcross) for help,
or look for Jeff Cross on the [Static Showdown Slack](https://static-showdown.slack.com/).

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

In order to start the seed app use:

```bash
git clone --depth 1 https://github.com/jeffbcross/angularfire2-seed.git
cd angularfire2-seed
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
```

# Create a Component

To create a new Angular Route and Component:

 * copy the `src/about` directory to something like: `src/my-friends`.
 * Rename the html and TypeScript files inside `src/my-friends/components`:
   * Rename `src/my-friends/components/about.ts` to `src/my-friends/components/my-friends.ts`
   * Rename `src/my-friends/components/about.html` to `src/my-friends/components/my-friends.html`.
 * Replace the contents of `my-friends.html` with: `<div>Best Friend: {{bestFriend}}</div>`
 * Replace the contents of `my-friends.ts` with:

```typescript
import {Component} from 'angular2/core';

@Component({
  selector: 'my-friends',
  moduleId: module.id,
  templateUrl: './my-friends.html'
})
export class MyFriends {
  bestFriend: string = 'Jeff Cross';
}
```

 * Then to make the component routable from the root of the application, edit `src/app/components/app.ts` as follows:
   * Import MyFriends component:
   ```typescript
import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {MyFriends} from '../../my-friends/components/my-friends';
```
   * Add a `RouteConfig` entry for my-friends:
   ```typescript
{ path: '/', component: HomeCmp, name: 'Home' },
{ path: '/about', component: AboutCmp, name: 'About' },
{ path: '/my-friends', component: MyFriends, name: 'MyFriends'}
   ```

   * Add a link to the route in the app template in `src/app/components/app.html`:
   ```html
<a [routerLink]="['/Home']">Home</a>
<a [routerLink]="['/About']">About</a>
<a [routerLink]="['/MyFriends']">My Friends</a>
   ```
   * Open the app and click "My Friends"!

# Deploy to Firebase Hosting

## Setup Firebase (if a Firebase does not yet already exist for this app)

 1. Set up a Firebase at firebase.com
 1. From https://www.firebase.com/account/#/ click "Set up hosting" for the Firebase and follow the steps.
 1. Edit firebase.json in this project, set the `firebase` field to your subdomain.

```bash
npm install -g firebase-tools
npm run build.prod
firebase deploy
```

Then visit http://yourfirebase.firebaseapp.com

# License

MIT