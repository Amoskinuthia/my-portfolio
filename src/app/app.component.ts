import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts)
   { }
getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation'];
}
}
