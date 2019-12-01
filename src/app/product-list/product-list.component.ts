import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor(private service: ProductService) { }

  ngOnInit() 
  {
    let observableResult=  this.service.getProduct();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.products = result;
      })
  }

}
