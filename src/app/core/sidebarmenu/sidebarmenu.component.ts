import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'gj-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.css']
})
export class SidebarmenuComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'My Programs', link: ['/programs'] },
      { caption: 'My Exercises', link: ['/exercises'] },
      /*{ caption: 'Characters', link: ['/characters'] },
      { caption: 'Vehicles', link: ['/vehicles'] },
      { caption: 'Admin', link: ['/admin'] },
      { caption: 'Login', link: ['/login'] },*/
    ];
  }

}
