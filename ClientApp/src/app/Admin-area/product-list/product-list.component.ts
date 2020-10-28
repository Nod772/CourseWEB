import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from '../../Services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService,
    private spinner:NgxSpinnerService) { }
    listOfColumn = [
      {
        title: 'Image',
      },
      {
        title: 'Title',
      },
      {
        title: 'Price',
      },
      {
        title: 'Description',
      }
    ];
    listOfData: Product[] = [];
  ngOnInit() {
    this.spinner.show();
    this.productService.getAllProduct().subscribe(data => {
      console.log(data);
      this.listOfData = data;
      this.spinner.hide();
    });
  }

}
