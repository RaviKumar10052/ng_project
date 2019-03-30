import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytripComponent } from './mytrip/mytrip.component';
import { MyrewardsComponent } from './myrewards/myrewards.component';
import { MydealsComponent } from './mydeals/mydeals.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { MysettingComponent } from './mysetting/mysetting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MybillingdetailsComponent } from './mybillingdetails/mybillingdetails.component';
import { TravelpreferenceComponent } from './travelpreference/travelpreference.component';
import { MytravelersComponent } from './mytravelers/mytravelers.component';
import { HeadbarComponent } from './headbar/headbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmailsettingComponent } from './emailsetting/emailsetting.component';
import { UpcomingTripsComponent } from './upcoming-trips/upcoming-trips.component';
import { CompletedTripsComponent } from './completed-trips/completed-trips.component';
import { CanceledTripsComponent } from './canceled-trips/canceled-trips.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MytripComponent,
    MyrewardsComponent,
    MydealsComponent,
    MyinfoComponent,
    MysettingComponent,
    PagenotfoundComponent,
    MydetailsComponent,
    MybillingdetailsComponent,
    TravelpreferenceComponent,
    MytravelersComponent,
    HeadbarComponent,
    FooterComponent,
    EmailsettingComponent,
    UpcomingTripsComponent,
    CompletedTripsComponent,
    CanceledTripsComponent,
    RecentSearchesComponent,
    WishlistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
