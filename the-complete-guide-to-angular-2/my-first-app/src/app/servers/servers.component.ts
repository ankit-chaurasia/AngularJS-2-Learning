import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  // styleUrls: ['./servers.component.css'],
  styles: [`
    h3 {
      color: blue
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
