// file: src/app/products/products.component.ts
import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;      // Link to the product on kaspi.kz
  images: string[];  // Array of image URLs
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Apple iPhone 14 128Gb',
      description: 'Новый iPhone 14 с улучшенной камерой и процессором A15.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363626/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/hf6/62206168498142/apple-iphone-14-128gb-cernyj-106363626-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h1e/62206168825886/apple-iphone-14-128gb-cernyj-106363626-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h73/62206169022430/apple-iphone-14-128gb-cernyj-106363626-4.jpg'
      ]
    },
    {
      name: 'Samsung Galaxy S23 256Gb',
      description: 'Флагманский смартфон от Samsung с отличной камерой и экраном.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-fantom-chernyi-108021758/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/hb4/68541014208542/smartfon-samsung-galaxy-s23-128gb-cernyj-108021758-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h7c/68541014536286/smartfon-samsung-galaxy-s23-128gb-cernyj-108021758-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h2a/68541014864030/smartfon-samsung-galaxy-s23-128gb-cernyj-108021758-3.jpg'
      ]
    },
    {
      name: 'Apple MacBook Air 13 M1',
      description: 'Тонкий и легкий ноутбук с новым чипом Apple M1.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797412/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/hd0/44682015461342/apple-macbook-air-13-m1-2020-8gb-256gb-mgn63-100797412-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h47/50129725289246/apple-macbook-air-13-m1-2020-8gb-256gb-mgn63-100797412-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h3c/50129726029854/apple-macbook-air-13-m1-2020-8gb-256gb-mgn63-100797412-3-Container.jpg'
      ]
    },
    {
      name: 'Xiaomi Redmi Note 11',
      description: 'Смартфон среднего класса с отличным соотношением цены и качества.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-128gb-seryi-104284672/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/h9d/48615579136030/xiaomi-redmi-note-11-6-gb-128-gb-seryj-104284672-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h87/48615579672542/xiaomi-redmi-note-11-6-gb-128-gb-seryj-104284672-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcc/h7b/49458994712542/xiaomi-redmi-note-11-6-gb-128-gb-seryj-104284672-3.jpg'
      ]
    },
    {
      name: 'ASUS TUF Gaming F15',
      description: 'Игровой ноутбук с мощной видеокартой и процессором Intel Core i7.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hc-hn544w-chernyi-106255689/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h22/61572210798558/asus-tuf-gaming-f15-fx506hc-hn544w-cernyj-106255689-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h1e/61572211126206/asus-tuf-gaming-f15-fx506hc-hn544w-cernyj-106255689-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h58/61572211519454/asus-tuf-gaming-f15-fx506hc-hn544w-cernyj-106255689-3.jpg'
      ]
    },
    {
      name: 'Samsung QE55Q60TAUXCE QLED TV',
      description: 'Смарт-телевизор QLED 55 дюймов от Samsung.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-qe55q60ta-140-sm-seryi-100646815/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/h8c/31990833524766/samsung-qe55q60ta-140-sm-seryj-100646815-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h13/31990834343966/samsung-qe55q60ta-140-sm-seryj-100646815-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h75/31990835273758/samsung-qe55q60ta-140-sm-seryj-100646815-3.jpg'
      ]
    },
    {
      name: 'Apple Watch Series 8',
      description: 'Умные часы от Apple с отслеживанием здоровья и фитнеса.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-chernyi-106265948/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/h53/61575376687198/apple-watch-series-8-45-mm-cernyj-106265948-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hb6/61645764812830/apple-watch-series-8-45-mm-cernyj-106265948-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h25/61645765140574/apple-watch-series-8-45-mm-cernyj-106265948-3.jpg'
      ]
    },
    {
      name: 'Samsung Galaxy Watch 5 Pro',
      description: 'Прочные умные часы от Samsung для активного образа жизни.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch5-pro-45-mm-cernyi-106102464/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h4e/61400690589662/samsung-galaxy-watch5-pro-45-mm-cernyi-106102464-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf5/h07/61400690917406/samsung-galaxy-watch5-pro-45-mm-cernyi-106102464-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/hd9/61400691245150/samsung-galaxy-watch5-pro-45-mm-cernyi-106102464-3.jpg'
      ]
    },
    {
      name: 'Canon EOS 250D',
      description: 'Компактная зеркальная камера для начинающих фотографов.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/canon-eos-250d-kit-18-55-mm-is-stm-chernyi-100315675/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h95/31544960086046/canon-eos-250d-kit-18-55-mm-is-stm-cernyj-100315675-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/hf6/31544960623198/canon-eos-250d-kit-18-55-mm-is-stm-cernyj-100315675-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h88/31544961397854/canon-eos-250d-kit-18-55-mm-is-stm-cernyj-100315675-3-Container.jpg'
      ]
    },
    {
      name: 'Sony PlayStation 5',
      description: 'Игровая консоль нового поколения с поддержкой 4K-графики.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/igrovaja-konsol-sony-playstation-5-belyi-100746100/?c=750000000#!/item',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h1d/33245239808030/sony-playstation-5-belyj-100746100-1-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/hee/33245240345182/sony-playstation-5-belyj-100746100-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hcb/33245240882334/sony-playstation-5-belyj-100746100-3-Container.jpg'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Check out this product: ${product.name}\n${product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(`Check out this product: ${product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}







<!-- file: src/app/products/products.component.html -->
<div class="products-container">
  <h2>Products List</h2>
  <div class="product-card" *ngFor="let product of products">
    <!-- Main Image (first in the array) -->
    <div class="product-image">
      <img [src]="product.images[0]" alt="{{ product.name }}">
    </div>

    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Rating: {{ product.rating }} / 5</p>
      <a [href]="product.link" target="_blank">View on Kaspi</a>
      
      <!-- Image Gallery -->
      <div class="gallery">
        <div 
          class="thumbnail" 
          *ngFor="let img of product.images; let i = index"
          (click)="selectedImg.src = img"
        >
          <img [src]="img" alt="{{ product.name }} image {{ i + 1 }}">
        </div>
      </div>

      <!-- Share Buttons -->
      <div class="share-buttons">
        <button (click)="shareOnWhatsApp(product)">Share on WhatsApp</button>
        <button (click)="shareOnTelegram(product)">Share on Telegram</button>
      </div>
    </div>
  </div>
</div>




/* file: src/app/products/products.component.css */

.products-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }
  
  .products-container h2 {
    margin-top: 20px;
  }
  
  .product-card {
    display: flex;
    width: 80%;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
  }
  
  .product-image img {
    width: 200px;
    height: auto;
    border-radius: 8px;
  }
  
  .product-info {
    margin-left: 20px;
    flex: 1;
  }
  
  .product-info h3 {
    margin-top: 0;
  }
  
  .gallery {
    margin: 10px 0;
    display: flex;
    gap: 10px;
  }
  
  .thumbnail img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    object-fit: cover;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .share-buttons {
    margin-top: 10px;
  }
  
  .share-buttons button {
    margin-right: 10px;
    cursor: pointer;
  }
  