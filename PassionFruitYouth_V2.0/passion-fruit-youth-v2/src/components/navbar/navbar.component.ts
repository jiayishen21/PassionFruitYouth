import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sections: Section[];

  constructor() { 
    this.sections = [
      new Section('Home', ''),
      new Section('Oppurtunities', '/oppurtunities'),
      new Section('Events', '/events'),
      new Section('Meet the Team', '/meet-the-team'),
      new Section('About', '/about')
    ];
  }

  ngOnInit(): void {
  }

}

class Section {
  private _name: String;
  private _href: String;

  constructor(name:String, href:String) {
    this._name = name;
    this._href = href;
  }

  get name() {
    return this._name;
  }

  get href() {
    return this._href;
  }
}
