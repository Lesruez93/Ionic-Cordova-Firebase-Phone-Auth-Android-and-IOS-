import {Component, ViewChild,} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {Config, MenuController, ModalController, Nav, Platform, ToastController} from 'ionic-angular';
import {FcmProvider} from "../providers/fcm/fcm";
import {Home, Login} from "../pages";
import {Storage} from "@ionic/storage";
import {AngularFireAuth} from 'angularfire2/auth';
import {FunctionsProvider} from "../providers/functions/functions";
import {AboutTabsPage} from "../pages/about-us/about-tabs";
import {AppVersion} from "@ionic-native/app-version";


@Component({
  templateUrl:'app.html'
})
export class MyApp {
   rootPage = '';


  @ViewChild(Nav) nav: Nav;
    private uid: any;





  constructor(private translate: TranslateService, platform: Platform,
            private config: Config,
             private statusBar: StatusBar,
              private fcm: FcmProvider,
             private   toastCtrl: ToastController,

              private afs: AngularFireAuth,


  ) {



    platform.ready().then(() => {
       // this.menu.swipeEnable(false)





            this.afs.authState.subscribe(res => {


                if (res && res.uid ) {
                    this.rootPage = Home;
                    this.uid = res.uid;
                    // this.func.sync(this.uid,"1")
                    // fcm.subscribeToTopic("BCC").catch(err=>{
                    //
                    // });
                    // fcm.subscribeToTopic("BCC"+this.branchId+this.uid).catch(err=>{
                    //
                    // });
                    // fcm.subscribeToTopic("BCC"+'-prayers').catch(err=>{
                    //     console.log(JSON.stringify(err))
                    //
                    // });
                }
                else {
                    this.rootPage = Login

                }
            })
        })
        //  func.sync()
         // Get a FCM token



          fcm.listenToNotifications()
              .subscribe(res => {

                  if(res.wasTapped){
                     this.nav.setRoot(res.page, { pageId: res.title });


                  }
                  else {
                      const toast = toastCtrl.create({
                          message: res.body,
                          duration: 10000,
                          showCloseButton: true,
                          closeButtonText: 'View',
                          dismissOnPageChange: true,
                          position:'top'


                      });

                      toast.present();

                      toast.onDidDismiss((data, role) => {
                         // console.log('Dismissed toast');
                          if (role == "close") {
                              this.nav.push(res.page, { pageId: res.title });


                          }
                      });
                  }
              });







        statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#f2af37')
    this.initTranslate();


  }

    // onSplitPaneChange(e) {
    //     if (e._visible) {
    //         this.rootPage = Tabs
    //     } else {
    //         this.rootPage = Home
    //     }
    // }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }


}
