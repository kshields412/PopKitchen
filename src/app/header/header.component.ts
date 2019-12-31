import { Component, OnInit } from '@angular/core';
import { ModalService } from '.././modal.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  initLoginModal() {
    let inputs = {
      isMobile: false
    }
    this.modalService.init(LoginComponent, inputs, {});
  }
  
}
