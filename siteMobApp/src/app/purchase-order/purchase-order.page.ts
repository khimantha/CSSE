import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.page.html',
  styleUrls: ['./purchase-order.page.scss'],
})
export class PurchaseOrderPage implements OnInit {

  private purchaseOrderForm :FormGroup;
  constructor(private fb:FormBuilder) {
   
    
   }

  ngOnInit() {

    this.purchaseOrderForm = this.fb.group([
      
    ])
  }

}
