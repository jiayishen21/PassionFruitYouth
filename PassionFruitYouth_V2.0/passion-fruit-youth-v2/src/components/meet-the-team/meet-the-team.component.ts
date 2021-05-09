import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {
  profiles: Profile[];

  constructor() { 
    this.profiles = [
      new Profile('William Jiang', 'william-jiang.png', 'Chief Executive Officer', ''),
      new Profile('Stephanie Li', 'stephanie-li.png', 'Secretary', ''),
      new Profile('Lucas Shen', 'stephanie-li.png', 'Chief of Web Development', ''),

      new Profile('Bonnie Wen', 'bonnie-wen.png', 'Co-Chief of Finance & EA', ''),
      new Profile('Lola Irelewuyi', 'lola-irelewuyi.png', 'Co-Chief of Finance & EA', ''),
      new Profile('Jessie Hu', 'jessie-hu.png', 'Finance & EA Coordinator', ''),
      new Profile('Julia Petrucci', 'julia-petrucci.png', 'Finance & EA Coordinator', ''),
      new Profile('Maggie Lu', 'maggie-lu.png', 'Finance & EA Coordinator', ''),

      new Profile('Emily Yu', 'emily-yu.png', 'Co-Chief of Marketing & Design', ''),
      new Profile('Esther Zhu', 'esther-zhu.png', 'Co-Chief of Marketing & Design', ''),
      new Profile('Bethany Cheung', 'bethany-cheung.png', 'Marketing & Design Coordinator', ''),
      new Profile('Elizabeth Zhang', 'elizabeth-zhang.png', 'Marketing & Design Coordinator', ''),
      new Profile('Shirley Huang', 'shirley-huang.png', 'Marketing & Design Coordinator', ''),

      new Profile('Stephen Tang', 'stephen-tang.png', 'Co-Chief of Logistics & Events', ''),
      new Profile('Marco Chen', 'marco-chen.png', 'Co-Chief of Logistics & Events', ''),
      new Profile('Andrea Yeh', 'andrea-yeh.png', 'Logistics & Events Coordinator', ''),
      new Profile('Marshal Guo', 'marshal-guo.png', 'Logistics & Events Coordinator', ''),
      new Profile('Fatima Mohammed', 'fatima-mohammed.png', 'Logistics & Events Coordinator', ''),
      new Profile('Nada Armanios', 'nada-armanios.png', 'Logistics & Events Coordinator', '')
    ]
  }

  ngOnInit(): void {
  }

  displayProfile(profile: Profile) {
    var profileContainer = document.getElementById('profile-container');
    profileContainer!.style.visibility = 'visible';
    profileContainer!.style.marginTop = '18vh';

    var activePosition = document.getElementById('active-position');
    activePosition!.style.marginTop = '3vh'; 
    activePosition!.innerHTML = profile.position;

    document.getElementById('active-name')!.innerHTML = profile.name;
    document.getElementById('active-image')!.setAttribute('src', 'assets/img/profiles/' + profile.imgName);
    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
}

}

class Profile {
  private _name: string;
  private _imgName: string;
  private _position: string;
  private _description: string;

  constructor(name: string, imgName: string, position: string, description: string) {
    this._name = name;
    this._imgName = imgName;
    this._position = position;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get imgName() {
    return this._imgName;
  }

  get position() {
    return this._position;
  }

  get description() {
    return this._description;
  }
}
