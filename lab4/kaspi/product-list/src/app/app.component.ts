import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './page/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,NewComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
}
