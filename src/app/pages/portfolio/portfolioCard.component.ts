import { Component, OnInit, Input } from '@angular/core';
import {PortfolioItem} from './portfolioData';

@Component({
  selector: 'portfolio-card',
  templateUrl: './portfolioCard.component.html',
  styleUrls: ['./portfolioCard.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input() data: PortfolioItem
  constructor() {
    console.log('portfolio card created');
  }

  ngOnInit() {
    console.log("portfolio card init ", this.data, JSON.stringify(this.data), this.data.quarter, this.data.imageSource);
  }

}