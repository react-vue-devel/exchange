import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPage } from '../pages/feed/feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{
    title: string, 
    component: any,
    icon: string
  }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Exchange', component: 'ExchangePage', icon: 'ios-trending-up-outline' },
      { title: 'News Feed', component: 'FeedPage', icon: 'ios-paper-outline' },
      { title: 'Coin Market Cap', component: 'CoinMarketCapPage', icon: 'logo-bitcoin' },
      { title: 'Settings', component: 'SettingsPage', icon: 'ios-alert-outline' },
      
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.nav.setRoot(FeedPage);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nav.setRoot(FeedPage);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
