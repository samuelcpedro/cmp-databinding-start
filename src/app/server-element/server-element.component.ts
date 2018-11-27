import { element } from 'protractor';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None // makes css from this component as gloval
  // encapsulation: ViewEncapsulation.Native // uses the shadow DOM is compatble browsers
  // For the DOM this means using modern Shadow DOM and creating a ShadowRoot for Component's Host Element.
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated // is the default
})
export class ServerElementComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
