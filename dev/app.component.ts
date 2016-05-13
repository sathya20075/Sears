import {Component} from '@angular/core';
import { HTTP_PROVIDERS }    from '@angular/http';
import {ProductListComponent} from './product-list.component';

@Component({
    selector: 'my-app',
    template: `        
        
        <product-list></product-list>
       
    `,
    directives: [ProductListComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {

}