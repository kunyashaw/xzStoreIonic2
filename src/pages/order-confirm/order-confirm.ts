import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PayPage } from '../pay/pay'
import { MyHttpService } from '../../app/utility/service/myhttp.service'
/**
 * Generated class for the OrderConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
  styleUrls: ['../assets/css/order_confirm.css']
})
export class OrderConfirmPage {
  list: Array<any> = [];
  constructor(
    public myHttp: MyHttpService,
    public modalCtr: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderConfirmPage');
    this.initData();
  }
  ionViewWillEnter() {

  }

  getTotalPrice() {
    let totalPrice = 0;
    for (var i = 0; i < this.list.length; i++) {
      totalPrice += (this.list[i].count * this.list[i].price);
    }
    return totalPrice;
  }
  pay() {
    let myWidnow = this.modalCtr.create(PayPage, { price: this.getTotalPrice() });
    console.log('准备显示');
    myWidnow.present();
    myWidnow.onDidDismiss(data => {
      console.log(data);
      if (data.result) {

        if (this.navCtrl.canGoBack()) {
          this.navCtrl.pop();
        }
        this.navCtrl.parent.select(0);
      }
    });
  }

  initData() {
    this.myHttp
      .sendRequest(this, "http://localhost/Framework_codes/data/cart/list.php")
      .subscribe((result: any) => {
        this.list = result.data;
      })
  }

}
