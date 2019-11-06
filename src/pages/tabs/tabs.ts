import { Component } from '@angular/core';

import {HomePage} from '../home/home';
import {MessagesPage} from '../messages/messages';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
