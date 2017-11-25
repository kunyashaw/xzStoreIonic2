import { ViewChild, Component } from '@angular/core';
import { IonicPage, Tabs, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'

import { IndexPage } from '../index/index'
import { OrderConfirmPage } from '../order-confirm/order-confirm'
import { LoginPage } from '../login/login'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  isSelectAll: boolean = false;
  productList: Array<any> = [];
  totalPrice = 0;
  index;
  orderConfirm;
  isConfirmEnabled: boolean = false;
  isLogin: boolean = false;
  @ViewChild("myTabs") myTabs: Tabs;



  constructor(private myHttp: MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
    this.index = IndexPage;
    this.orderConfirm = OrderConfirmPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }



  ionViewDidEnter() {
    this.isSelectAll = false;
    this.guard();
    this.loadData();
  }

  loadData() {
    this.myHttp
      .sendRequest(this, "http://localhost/Framework_codes/data/cart/list.php")
      .subscribe((result) => {
        console.log('cart', result);
        if (result.code == 200) {
          this.productList = result.data;
          for (var i = 0; i < this.productList.length; i++) {
            this.productList[i].isSelect = false;
          }
        }
      })
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for (var i = 0; i < this.productList.length; i++) {
      if (this.productList[i].isSelect) {
        this.totalPrice += (this.productList[i].count * this.productList[i].price);
      }

    }
    console.log("计算后的总价格信息为", this.totalPrice);
    return this.totalPrice;
  }

  //从购物车中移除
  deleteFromList(index) {
    this.myHttp.sendRequest(this, "http://localhost/Framework_codes/data/cart/del.php?iid=" + this.productList[index].iid)
      .subscribe((result: any) => {
        if (result && result.code == 200) {
          this.productList.splice(index, 1);
        }
      })
  }

  //修改购物车数量
  modifyCount(isMinux: boolean, index: number) {

    let readyModifyCount = this.productList[index].count;
    console.log('修改前是:' + readyModifyCount);

    if (isMinux) {
      readyModifyCount--;
      if (readyModifyCount == -1) {
        return;
      }
    }
    else {
      readyModifyCount++;
    }
    this.productList[index].count = readyModifyCount;

  }

  selectOne(index) {
    console.log(this.productList[index].isSelect);
    let result = true;
    let isConfirmEnabled = false;
    for (var i = 0; i < this.productList.length; i++) {
      //计算是否全部选中了
      result = result && this.productList[i].isSelect;
      //有一个为真，就允许点击 去结算
      isConfirmEnabled = isConfirmEnabled || this.productList[i].isSelect;
    }
    this.isSelectAll = result;
    this.isConfirmEnabled = isConfirmEnabled;
  }

  selectAll() {
    console.log(this.isSelectAll);
    for (var i = 0; i < this.productList.length; i++) {
      this.productList[i].isSelect = this.isSelectAll;
    }
    this.isConfirmEnabled = this.isSelectAll;
  }

  jumpToTabIndex() {
    this.navCtrl.parent.select(0);
  }
  jumpToLogin() {
    this.myHttp.showToast('准备跳转到登录页面');
    this.navCtrl.push(LoginPage);
  }


  //守卫
  guard() {
    this.myHttp.checkUserLogin().subscribe((data) => {
      console.log('login', data);
      if (data.uid) {
        this.isLogin = true;
        return true;
      }
      else {
        this.isLogin = false;
        if (this.navCtrl.parent.getSelected().index != 1) {
          this.myHttp.showToast('未登录，准备跳转到登录页面');
          this.navCtrl.push(LoginPage);
        }
        //if ()

        return false;
      }
    })
    return false;
  }
}
