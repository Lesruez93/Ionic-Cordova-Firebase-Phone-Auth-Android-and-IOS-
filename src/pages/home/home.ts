import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',


})
export class HomePage {
    private phone: any;
    private uid: any;



  constructor(
              private navParams:NavParams,
              private navCtrl:NavController,
              private afs: AngularFireAuth,



  ) {

      console.log("uid"+this.uid)





      this.afs.authState.subscribe(res => {

              if (res && res.uid) {
                  this.uid = res.uid

          } else {

                  this.signOut()
           }




  })

      }
      signOut(){
          this.navCtrl.setRoot('login',{
          });
      this.afs.auth.signOut()

      }


}
