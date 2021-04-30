import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent implements OnInit {
  cards: Card[];

  constructor() { 
    this.cards = [
      new Card('Test', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi odit cum autem aliquam ipsam voluptate doloribus nulla, quo deserunt illo ullam, saepe asperiores, id eaque quis rerum error ipsa.'),
      new Card('Test2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi odit cum autem aliquam ipsam voluptate doloribus nulla, quo deserunt illo ullam, saepe asperiores, id eaque quis rerum error ipsa.'),
      new Card('Test3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi odit cum autem aliquam ipsam voluptate doloribus nulla, quo deserunt illo ullam, saepe asperiores, id eaque quis rerum error ipsa.'),
      new Card('Test4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi odit cum autem aliquam ipsam voluptate doloribus nulla, quo deserunt illo ullam, saepe asperiores, id eaque quis rerum error ipsa.')
    ]
  }

  ngOnInit(): void {
  }

}

class Card {
  private _Job: String;
  private _Disc: String;

  constructor(Job:String, Disc:String){
    this._Job = Job;
    this._Disc = Disc;
  }

  get Job() {
    return this._Job;
  }

  get Disc() {
    return this._Disc;
  }
}