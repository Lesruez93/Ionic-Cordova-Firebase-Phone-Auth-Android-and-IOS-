import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Camera} from '@ionic-native/camera';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicStorageModule, Storage} from '@ionic/storage';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {EmojiProvider} from '../providers/emoji';
import {ModalContentPage} from "../pages/prayer/modal-content-page.component";
import {AngularFireModule} from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {NativeStorage} from '@ionic-native/native-storage';
import {Items} from '../mocks/providers/items';
import {Api, Settings} from '../providers';
import {MyApp} from './app.component';
import {ModalGive} from "../pages/give/modal-give.component";
import {CallNumber} from "@ionic-native/call-number";
import {BrowserTab} from "@ionic-native/browser-tab";
import {ModalComplete} from "../pages/completeReg/complete";
import {HTTP} from "@ionic-native/http";
import {DevotionProvider} from "../providers/devotion/devotion-provider";
import {BranchProvider} from "../providers/branch/branch-provider";
import {CellProvider} from "../providers/cellgroups/cell-provider";
import {DptProvider} from "../providers/departments/dpt-provider";
import {MembersProf} from "../providers/memberProf/members-prof";
import {ProjectsProvider} from "../providers/projects/projects-provider";
import {Firebase} from "@ionic-native/firebase";
import {NoticeProvider} from "../providers/notice/notice-provider";
import {CloudProvider} from "../providers/cloud/cloud";
import {AudioProvider} from "../providers/audio/audio";
import * as firebase from "firebase";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {EventProvider} from "../providers/event/event-provider";
import {YtProvider} from "../providers/yt/yt";
import {LiveProvider} from "../providers/live/live-provider";
import {VideosProvider} from "../providers/videos/notice-provider";
import {FcmProvider} from "../providers/fcm/fcm";
import {PledgesProvider} from '../providers/pledges/pledges';
import {ModalProjects} from "../pages/give/projects/modal-pledge.component";
import {FunctionsProvider} from "../providers/functions/functions";
import {Network} from "@ionic-native/network";
import {LocalStorageProvider} from "../providers/local-storage/local-storage";
import {NetworkProvider} from "../providers/network/network";
import {RegionalEventProvider} from "../providers/event/regional-event-provider";
import {NationalEventProvider} from "../providers/event/national -event-provider";
import {OrgInfoProvider} from "../providers/org-info/org-provider";
import {Cell} from "../providers/cellgroups/cell";
import {SocialSharing} from "@ionic-native/social-sharing";
import {GroupsProvider} from "../providers/memberProf/groups";
import {MaritalProvider} from "../providers/memberProf/marital";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LangsProvider} from "../providers/memberProf/langs";
import {ModalEdit} from "../pages/userprof/edit-profile/edit";
import {ModalAddFamily} from "../pages/userprof/family-members/add-family/add-family";
import {MoreInfoProvider} from "../providers/memberProf/info";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {AngularCropperjsModule} from "angular-cropperjs";
import {StreamingMedia} from "@ionic-native/streaming-media";
import {CropperModal} from "../pages/userprof/cropper";
import {AppVersion} from "@ionic-native/app-version";


const config = {
  apiKey: "AIzaSyCUJ1n1KTJHDaDdVmpY686z8AAle8GAbQQ",
  authDomain: "dship-6fc02.firebaseapp.com",
  databaseURL: "https://dship-6fc02.firebaseio.com",
  projectId: "dship-6fc02",
  storageBucket: "dship-6fc02.appspot.com",
  messagingSenderId: "107565011509"
};
firebase.initializeApp(config);
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
      AngularFireStorageModule,
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
           AngularCropperjsModule,
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(
      {
        name: '__bcc',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
            Api,

            Firebase,
            AngularFireModule,
            Items,
            Camera,

            StatusBar,


            FcmProvider,




      { provide: Settings, useFactory: provideSettings, deps: [Storage] },


// Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
