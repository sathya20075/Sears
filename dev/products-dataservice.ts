import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Products} from './products';
import {Observable} from 'rxjs/Observable';


@Injectable() 
export class ProductsDataService {
	
	constructor(private http: Http){

	}

	private productURL = 'http://api.developer.sears.com/v2.1/products/search/sears/json/keyword/watch?apikey=DY44HMNdTiCAxnl7e7K5U2G1i36zNoa1';


	getProducts(): Observable<Products[]>{
		return this.http.get(this.productURL)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response){
		if(res.status < 200 || res.status >= 300){
			throw new Error('Bad response status:' +res.status);
		}

		let productDetails = res.json();
		console.log(productDetails.SearchResults.Products);
		return productDetails.SearchResults.Products || {};
	}


	private handleError(error: any){
		let errorMsg = error.message || 'Unable to reach server';
		console.error(errorMsg);
		return Observable.throw(errorMsg);
	}
}