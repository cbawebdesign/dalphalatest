import { Component, OnInit } from '@angular/core';
import {PortfolioCategory, portfolioData} from './portfolioData';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolioSections: PortfolioCategory[]

  constructor() {
    this.portfolioSections = portfolioData
  }

  ngOnInit() {
  }

}