import {Component} from '@angular/core';
import {
    Alert,
    AlertController,
    IonicPage,
    MenuController,
    ModalController,
    NavController,
    NavParams,
    Platform
} from 'ionic-angular';
import {FunctionsProvider} from "../../providers/functions/functions";
import {AngularFireAuth} from 'angularfire2/auth';
import {Storage} from "@ionic/storage";
import {ModalOption} from "./modal-options.component";
import {Api} from "../../providers/api/api";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',


})
export class HomePage {



  constructor(public navCtrl: NavController,
              private navParams:NavParams,
              private afs: AngularFireAuth,
              private alertCtrl: AlertController,
              private modalCtrl: ModalController,


  ) {




          this.afs.authState.subscribe(res => {

              if (res && res.uid) {

          } else {
                  this.navCtrl.setRoot('login',{
                  });
           }




  })

      }


}
