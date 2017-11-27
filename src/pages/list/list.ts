import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { DetailPage } from '../detail/detail'
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  kw: string = "";
  resultList: Array<any> = [];
  pno = 1;
  totalCount = 1;
  constructor(
    public myHttp: MyHttpService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.search();
  }

  jumpToDetail(myIndex) {
    this.navCtrl.push(DetailPage, { id: this.resultList[myIndex].lid });
  }

  search() {
    this.kw = this.navParams.get('kw');
    this.myHttp
      .sendRequest(this, 'http://localhost/framework_codes/data/product/list.php?kw=' + this.kw)
      .subscribe((result: any) => {
        console.log(result);
        this.resultList = result.data;
        this.totalCount = result.pageCount;
      })
  }

  loadMore(infinite) {
    this.pno++;

    if (this.pno > this.totalCount) {
      this.myHttp.showToast('没有更多数据可以加载了');
      return;
    }
    this.myHttp
      .sendRequest(this, 'http://localhost/framework_codes/data/product/list.php?kw=' + this.kw + "&pno=" + this.pno)
      .subscribe((result: any) => {
        console.log(result);
        this.resultList = this.resultList.concat(result.data);
        infinite.complete();
      })


  }

}
