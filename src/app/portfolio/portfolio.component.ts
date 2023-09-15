import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imagesSrcs: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
  ];

  zoomedImageUrl: string = '';
  zoomedImageVisible: boolean = false;

  showZoomedImage(imageulr: HTMLImageElement): void {
    console.log(this.zoomedImageUrl);
    this.zoomedImageUrl = imageulr.src;
    this.zoomedImageVisible = true;
  }

  closeZoomedImage(): void {
    this.zoomedImageVisible = false;
  }
}
