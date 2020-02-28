import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/feed'},
  { path: '**', pathMatch: 'full', redirectTo: '/feed' },
  /* ng g module modules/feed --module=app --routing=true --route=feed :: instead of adding the feed-routing.module to the imports, since it does not provide lazy loading */
  { path: 'feed', loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
