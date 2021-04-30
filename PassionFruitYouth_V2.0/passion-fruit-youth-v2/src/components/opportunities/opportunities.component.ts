import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  selectionCards: SelectionCard[];

  constructor() {
    this.selectionCards = [
      new SelectionCard('Business', 'business.png', '/opportunities#business'),
      new SelectionCard('S.T.E.M.', 'stem.png', '/opportunities#stem'),
      new SelectionCard('Health', 'medical.png', '/opportunities#medical'),
      new SelectionCard('Literature', 'literature.png', '/opportunities#literature'),
      new SelectionCard('Art', 'art.png', '/opportunities#art'),
      new SelectionCard('Music', 'music.png', '/opportunities#music'),
    ]

   }

  ngOnInit(): void {
  }

}

class SelectionCard {
  private _text: String;
  private _imgPath: String;
  private _href: String;

  constructor(text:String, imgPath: String, href:String) {
    this._text = text;
    this._imgPath = imgPath;
    this._href = href;
  }

  get text() {
    return this._text;
  }

  get imgPath() {
    return this._imgPath;
  }

  get href() {
    return this._href;
  }
}
