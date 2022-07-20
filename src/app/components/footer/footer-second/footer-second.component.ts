import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-second',
  templateUrl: './footer-second.component.html',
  styleUrls: ['./footer-second.component.scss']
})
export class FooterSecondComponent implements OnInit {
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
