import { Component } from '@angular/core';
import { LoadingController, ViewController, ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  totalPrice: any;
  constructor(
    public myHttp: MyHttpService,
    public viewCtrl: ViewController, private loadCtr: LoadingController, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage', this.navParams);
    this.totalPrice = this.navParams.get('price');
  }

  closeModal(result: boolean) {
    this.viewCtrl.dismiss({ 'result': result });
  }

  payOrder() {
    /**
     * if($iid = -1)
      {
        $sql = "DELETE FROM xz_shoppingcart_item";
      }
      else
      {
        $sql = "DELETE FROM xz_shoppingcart_item WHERE iid=$iid";
      }
    * 
     */
    this.myHttp
      .sendRequest(this, 'http://localhost/Framework_codes/data/cart/del.php?iid=-1')
      .subscribe((result: any) => {
        if (result.code == 200) {
          this.myHttp.showToast('支付成功');
          this.closeModal(true);
        }
        else if (result.code == 500) {
          this.myHttp.showToast('下单失败');
          this.closeModal(false);
        }

      })
  }

}
