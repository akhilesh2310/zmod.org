import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
@Input() dataSource;
@Input() cssClass;
  constructor() { }

  ngOnInit() {
  }

}
