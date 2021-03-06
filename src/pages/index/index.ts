import { ViewChild, Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyHttpService } from '../../app/utility/service/myhttp.service'
import { DetailPage } from '../detail/detail'
import { Slides } from 'ionic-angular'
import { ListPage } from '../list/list'
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  @ViewChild('mySlides') MySlides: Slides;
  myInput: string = "";

  //轮播商品
  carouselItems: Array<any> = [];
  //保存的推荐商品的对象数组
  recommendedItems: Array<any> = [];
  //跳转到详情需要的detail
  detail;
  constructor(private myHttp: MyHttpService, public navCtrl: NavController, public navParams: NavParams) {
    this.detail = DetailPage;
  }

  doSearch() {
    this.navCtrl.push(ListPage, { kw: this.myInput });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    //this.loadData();
  }

  ionViewWillEnter() {
    this.myInput = "";
    this.loadData();
    if (this.MySlides) {
      this.MySlides.startAutoplay();
      console.log('开始自动播放');
    }

  }

  ionViewWillLeave() {
    if (this.MySlides) {
      this.MySlides.stopAutoplay();
      console.log('停止自动播放');
    }
  }

  //初始化数据
  //"https://jsonplaceholder.typicode.com/posts"
  loadData() {
    this.myHttp
      .sendRequest(this, "http://localhost/framework_codes/data/product/index.php")
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.carouselItems) {
          //轮播图，使用slides进行autoplay
          this.carouselItems = data.carouselItems;
          this.recommendedItems = data.recommendedItems;
          console.log('saved recommendedItems is ', this.recommendedItems);
        }
      })
  }

}
