import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[NgbDropdown]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
