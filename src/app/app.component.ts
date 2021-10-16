import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg: boolean = true;


  products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      image: 'https://cdn.icon-icons.com/icons2/1603/PNG/512/lego-figure-head-smile-toy_108508.png',
      price: 100
    },
    {
      id: 2,
      name: 'Producto 2',
      image: 'https://www.lego.com/cdn/cs/set/assets/bltb1c5d0244b4814b2/5004893.jpg',
      price: 20
    },
    {
      id: 3,
      name: 'Producto 3',
      image: 'https://m.media-amazon.com/images/I/51C8BTVaZJL._AC_SL1200_.jpg',
      price: 24
    },
    {
      id: 4,
      name: 'Producto 4',
      image: 'https://www.electricbricks.com/images/4004-yellow.jpg',
      price: 30
    }
  ] 
  

  onLoaded(img: string) {
    console.log('loaded padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}


