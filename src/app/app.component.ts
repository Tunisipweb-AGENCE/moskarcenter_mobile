import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ValidatePro } from '../pages/validate_pro/validatepro';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentPro } from '../pages/payment/payment';
import { BienvenuePage } from '../pages/bienvenue/bienvenue';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage},
      { title: 'Validate Pro', component: ValidatePro },
      { title: 'Profile', component: ProfilePage },
      { title: 'Payment Inscri', component: PaymentPro},
      { title: 'Bienvenue', component: BienvenuePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  loggedIn() {
    if (localStorage.getItem('ID')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.menu.close();
    localStorage.removeItem('cookie');
    localStorage.removeItem('ID');
    localStorage.removeItem('nonce');
    this.nav.setRoot(LoginPage);

  }
}
