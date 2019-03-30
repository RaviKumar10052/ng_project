import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MytripComponent} from './mytrip/mytrip.component';
   import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
   import { CompletedTripsComponent }  from './completed-trips/completed-trips.component';
   import { CanceledTripsComponent } from './canceled-trips/canceled-trips.component';
   import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
   import { WishlistComponent } from './wishlist/wishlist.component';
import{MyrewardsComponent} from './myrewards/myrewards.component';
import{MydealsComponent} from './mydeals/mydeals.component';
import{MyinfoComponent} from './myinfo/myinfo.component';
      import{MydetailsComponent} from './mydetails/mydetails.component';
      import{MybillingdetailsComponent} from './mybillingdetails/mybillingdetails.component';
      import{TravelpreferenceComponent} from './travelpreference/travelpreference.component';
      import{MytravelersComponent} from './mytravelers/mytravelers.component';
import{MysettingComponent} from './mysetting/mysetting.component';
      import{EmailsettingComponent} from './emailsetting/emailsetting.component';
import{PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path: '', redirectTo: '/myrewards', pathMatch: 'full' },
  {
        path: 'mytrip',
        component:MytripComponent,
        
        children: [
          {path: '', redirectTo: 'upcoming-trips', pathMatch: 'full' },
          {path: 'upcoming-trips', component:UpcomingTripsComponent},
          {path: 'completed-trips', component:CompletedTripsComponent},
          {path: 'canceled-trips', component:CanceledTripsComponent},
          {path: 'recent-searches', component:RecentSearchesComponent},
          {path: 'wishlist', component:WishlistComponent},

          {path: '**',  redirectTo: 'upcoming-trips', pathMatch: 'full' }
        ]

    },
  {path: 'myrewards', component:MyrewardsComponent  },
  {path: 'mydeals', component:MydealsComponent  },
      {
        path: 'myinfo',
          component:MyinfoComponent,
          children: [
            {path: '', redirectTo: 'mydetails', pathMatch: 'full' },
            {path: 'mydetails', component:MydetailsComponent},
            {path: 'mybilling', component:MybillingdetailsComponent},
            {path: 'mytravelpreference', component:TravelpreferenceComponent},
            {path: 'mytravelers', component:MytravelersComponent},
            {path: '**',  redirectTo: 'mydetails', pathMatch: 'full' }
          ]
    },
  {
    path: 'mysetting',
      component:MysettingComponent,
      children: [
        {path: '', redirectTo: 'email-setting', pathMatch: 'full' },
        {path: 'email-setting', component:EmailsettingComponent},
        {path: '**',  redirectTo: 'email-setting', pathMatch: 'full' }
      ]
  }, 
  {path: '**', component:PagenotfoundComponent  } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 