import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa';
  update:boolean = false;
  joke: any;

  constructor(updates:SwUpdate, private data:DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(()=>document.location.reload());
    })
  }

  ngOnInit() {
    this.data.gimmyJokes().subscribe(res => {
      this.joke = res;
    });
  }

}
