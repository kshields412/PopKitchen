import { Component, OnInit } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
import { images } from '../../images';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  imageSources = images;

  constructor() { }

  ngOnInit() {
  }

}
