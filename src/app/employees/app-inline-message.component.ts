import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-inline-message',
  templateUrl: './app-inline-message.component.html',
  styleUrls: ['./app-inline-message.component.less'],
  styles: [`
    :host {
      display: block;
      padding: 24px;
      background: rgba(0,0,0,0.03);
    }
  `]
})
export class AppInlineMessageComponent implements OnInit {

  @Input() content1: string;
  @Input() content2: string;
  
  constructor() { }

  ngOnInit() {
  }

}
