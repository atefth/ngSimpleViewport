import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	direction: string;
	placement: string;

  constructor() { 
    this.direction = 'left';
    this.placement = 'bottomLeft';
  }

  ngOnInit() { }
}
