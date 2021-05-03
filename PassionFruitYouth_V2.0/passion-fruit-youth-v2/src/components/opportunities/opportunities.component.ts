import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  sections: Section[];
  selectionCards: SelectionCard[];

  constructor() {
    this.sections = [
      new Section('Business', 'business-transition.png', 'business')
    ];
    this.selectionCards = [
      new SelectionCard('Business', 'business.png', '/opportunities#business'),
      new SelectionCard('S.T.E.M.', 'stem.png', '/opportunities#stem'),
      new SelectionCard('Health', 'medical.png', '/opportunities#medical'),
      new SelectionCard('Literature', 'literature.png', '/opportunities#literature'),
      new SelectionCard('Art', 'art.png', '/opportunities#art'),
      new SelectionCard('Music', 'music.png', '/opportunities#music'),
    ];

   }

  ngOnInit(): void {
  }

}

class Section {
  private _name: String;
  private _imgName: String;
  private _id: String;

  constructor(name: String, imgName: String, id: String) {
    this._name = name;
    this._imgName = imgName;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get imgName() {
    return this._imgName;
  }

  get id() {
    return this._id;
  }
}


class SelectionCard {
  private _text: String;
  private _imgName: String;
  private _href: String;

  constructor(text:String, imgName: String, href:String) {
    this._text = text;
    this._imgName = imgName;
    this._href = href;
  }

  get text() {
    return this._text;
  }

  get imgName() {
    return this._imgName;
  }

  get href() {
    return this._href;
  }
}