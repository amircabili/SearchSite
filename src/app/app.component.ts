import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { timer, Observable ,Subscription} from 'rxjs';
import {TimerObservable} from "rxjs/observable/TimerObservable";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'SearchSite';
  showLoadingIndicator = true;
  newhour = 0;
  ticks = 0;

  public seconds ;
  public hour ;
  public minute;
  public second ;

  pad2(number){
      number = '0' + number;
      return number.substr(number.length - 2);
  }

  private timer;
  // Subscription object
  private sub: Subscription;
  
  ngOnInit() {
    this.timer = timer(0,1000);
    // subscribing to a observable returns a subscription object
    this.sub = this.timer.subscribe(t => this.tickerFunc(t));
  }
 
  tickerFunc(tick){

      this.seconds = tick / 1000; 
      this.hour = Math.floor(this.seconds / 3600);
      this.minute = Math.floor((this.seconds / 60) % 60);
      this.second = this.seconds % 60;

      //console.log(this);
      //console.log(this.pad2(this.hour) + ':' + this.pad2(this.minute) + ':' + this.pad2(this.second));

      tick = (this.pad2(this.hour) + ':' + this.pad2(this.minute) + ':' + this.pad2(this.second));
      this.ticks = tick ;
  }

  ngOnDestroy() {
   // console.log("Destroy timer");
    // unsubscribe here
    this.sub.unsubscribe();
  }

  constructor(private _router: Router) {
    
      this._router.events.subscribe((routerEvent: Event) => {
        if (routerEvent instanceof NavigationStart){
        this.showLoadingIndicator = true;
        }

        if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
          this.showLoadingIndicator = false;
        }
    });

  }
}



