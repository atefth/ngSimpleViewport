import { Component, OnInit } from '@angular/core';
import { NgViewport } from './ng-viewport';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-responsive-resizer',
  templateUrl: './responsive-resizer.component.html',
  styleUrls: ['./responsive-resizer.component.css'],
  inputs: ['direction', 'placement'],
  viewProviders: [Window, Document]
})
export class ResponsiveResizerComponent implements NgViewport, OnInit {
	window: Window;
	viewport: any;
	direction: string;
	placement: string;

	virtualContainer: any;
	virtualDimensions: any;
	virtualRetina: any;
	virtualPixelRatio: any;
	virtualWidth: number;
	virtualHeight: number;

  constructor() { }

  resizer(): void {
		this.virtualWidth = window.innerWidth;
		this.virtualHeight = window.innerHeight;
		if (this.virtualDimensions) {
			this.virtualDimensions.innerHtml = this.virtualWidth + ' x ' + this.virtualHeight;
		}
	}

  ngOnInit() {
  	this.viewport = document.getElementById('viewport-container');
  	switch (this.placement) {
  		case "topRight":
  			this.viewport.className = 'ng-simple viewport-button top-right';
  			break;
  		case "topLeft":
  			this.viewport.className = 'ng-simple viewport-button top-left';
  			this.direction = 'right'
  			break;
  		case "bottomRight":
  			this.viewport.className = 'ng-simple viewport-button bottom-right';
  			break;
  		case "bottomLeft":
  			this.viewport.className = 'ng-simple viewport-button bottom-left';
  			this.direction = 'right'
  			break;
  		default:
  			this.viewport.className = 'ng-simple viewport-button top-right';
  			break;
  	}

  	this.virtualContainer = document.createElement('div');
  	document.getElementsByTagName('body')[0].insertBefore(this.virtualContainer, null).id = 'viewport-detector';

  	this.virtualDimensions = document.createElement('span');
  	this.virtualDimensions.className = 'dimensions';
  	document.getElementById('viewport-detector').appendChild(this.virtualDimensions);

  	this.virtualRetina = document.createElement('span');
  	this.virtualRetina.className = 'retina';
  	document.getElementById('viewport-detector').appendChild(this.virtualRetina);

  	this.virtualPixelRatio = document.createElement('span');
  	this.virtualPixelRatio.className = 'pixel-ratio';
  	document.getElementById('viewport-detector').appendChild(this.virtualPixelRatio);
	  this.virtualPixelRatio.innerHTML = 'Pixel Ratio: ' + window.devicePixelRatio;

	  if(window.devicePixelRatio >= 2) {
	    this.virtualRetina.innerHTML = 'Retina Device';
	  } else {
	    this.virtualRetina.innerHTML = 'No Retina Device';
	  }

  	window.onresize = this.resizer;
	  window.onload = this.resizer;
  }

}