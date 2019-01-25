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
              private afs: AngularFireAuth,



  ) {
      this.phone = navParams.get('phone');
      this.uid = navParams.get('uid');





      this.afs.authState.subscribe(res => {
                this.signOut()
              if (res && res.uid) {

          } else {
                  // this.navCtrl.setRoot('login',{
                  // });
           }




  })

      }
      signOut(){
      this.afs.auth.signOut()

      }


}
