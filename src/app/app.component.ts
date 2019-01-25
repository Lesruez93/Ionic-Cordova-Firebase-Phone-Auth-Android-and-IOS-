import {Component, ViewChild,} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {Nav, Platform, ToastController} from 'ionic-angular';
import {FcmProvider} from "../providers/fcm/fcm";
import {Home, Login} from "../pages";
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  templateUrl:'app.html'
})
export class MyApp {
   rootPage = '';


  @ViewChild(Nav) nav: Nav;
    private uid: any;





  constructor( platform: Platform,
             private statusBar: StatusBar,
              private fcm: FcmProvider,
             private   toastCtrl: ToastController,

              private afs: AngularFireAuth,


  ) {


      platform.ready().then(() => {
          this.check()
          statusBar.styleDefault();
          this.statusBar.backgroundColorByHexString('#f2af37');
          // this.menu.swipeEnable(false)


          //  func.sync()
          // Get a FCM token


          fcm.listenToNotifications()
              .subscribe(res => {

                  if (res.wasTapped) {
                      this.nav.setRoot(res.page, {pageId: res.title});


                  }
                  else {
                      const toast = toastCtrl.create({
                          message: res.body,
                          duration: 10000,
                          showCloseButton: true,
                          closeButtonText: 'View',
                          dismissOnPageChange: true,
                          position: 'top'


                      });

                      toast.present();

                      toast.onDidDismiss((data, role) => {
                          // console.log('Dismissed toast');
                          if (role == "close") {
                              this.nav.push(res.page, {pageId: res.title});


                          }
                      });
                  }
              });


      });


  }

      check(){
          this.afs.authState.subscribe(res => {

              console.log("checkingggg")
              if (res && res.uid ) {
                  this.rootPage = Home;
                  this.uid = res.uid;

              }
              else {
                  this.rootPage = Login

              }
          })
      }








}
