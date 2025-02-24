import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isBarVisible = false; // Initially hidden

  toggleBar() {
    this.isBarVisible = !this.isBarVisible;
    
  }
  toggleBarclose(){
    
  }
  
}
