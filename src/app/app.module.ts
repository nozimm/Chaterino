import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AnmeldenPage } from '../pages/anmelden/anmelden';
import { ChatroomsPage } from '../pages/chatrooms/chatrooms';
import { ChatPage } from '../pages/chat/chat';

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBfl-ZE0eOUSB45UlCFgJzrG5k3jnEfKkU",
  authDomain: "chaterino-v2.firebaseapp.com",
  databaseURL: "https://chaterino-v2.firebaseio.com",
  storageBucket: "chaterino-v2.appspot.com",
  messagingSenderId: "273495855874"
  // projectId: "chaterino-v2",
};

@NgModule({
  declarations: [
    MyApp,
    AnmeldenPage,
    ChatroomsPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnmeldenPage,
    ChatroomsPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}