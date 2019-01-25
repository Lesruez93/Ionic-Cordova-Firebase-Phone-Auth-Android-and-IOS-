import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Camera} from '@ionic-native/camera';
import {StatusBar} from '@ionic-native/status-bar';
import { TranslateModule} from '@ngx-translate/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {MyApp} from './app.component';

import {Firebase} from "@ionic-native/firebase";


import {FcmProvider} from "../providers/fcm/fcm";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import * as firebase from "firebase";


const config = {
  apiKey: "AIzaSyCUJ1n1KTJHDaDdVmpY686z8AAle8GAbQQ",
  authDomain: "dship-6fc02.firebaseapp.com",
  databaseURL: "https://dship-6fc02.firebaseio.com",
  projectId: "dship-6fc02",
  storageBucket: "dship-6fc02.appspot.com",
  messagingSenderId: "107565011509"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({

    }),

    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [


            Firebase,
            AngularFireModule,

            Camera,

            StatusBar,


            FcmProvider,







// Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
