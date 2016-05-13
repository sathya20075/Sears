import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Products} from './products';
import {ProductsDataService} from './products-dataservice';

@Component({
	selector: 'product-list',
	template: ` <div *ngFor="let product of products">
				 <div class="col-sm-6 col-md-3">
            	  <div class="thumbnail">
            	   <img src="{{product.Description.ImageURL}}  alt="{{product.Description.Name}}">
	             	 <div class="caption">
	               	 	<h3>{{product.Description.Name}} </h3>
	                		<p>details</p>
	                		<p><a href="#" class="btn btn-primary" role="button">Add to Cart</a>
	                  		<a href="#" class="btn btn-warning" role="button">Buy Now </a>
	                	    </p>
	                 </div>
                </div>
          </div>
         </div> `,
	providers: [ProductsDataService]
})

export class ProductListComponent implements OnInit{

	public errorMessage: string;
	public products:Products[];

	constructor(private _prodDataService:ProductsDataService){

	}

	ngOnInit(){
		this.getProducts();
	}

	getProducts(){
		this._prodDataService.getProducts()
							 .subscribe(
							 		products => this.products = products,
							 		error => this.errorMessage = <any>error);
	}
	
}