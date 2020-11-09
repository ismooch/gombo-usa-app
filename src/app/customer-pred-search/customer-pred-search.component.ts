import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-pred-search',
  templateUrl: './customer-pred-search.component.html',
  styleUrls: ['./customer-pred-search.component.css']
})
export class CustomerPredSearchComponent implements OnInit {
title = "TypeAhead";
  constructor() { }

  public myLocalList = [
    "Burgers",
    "Sandwhiches",
    "French Fries",
    "Milkshakes"





  ];

  public search1 = '';
  selectedStatic(result) {
    this.search1 = result;

  }

  ngOnInit(): void {
  }

}
