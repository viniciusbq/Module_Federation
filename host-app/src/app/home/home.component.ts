import { AppComponent } from './../app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('placeholder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.load();
  }

  async load(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: "http://localhost:4002/remoteEntry.js",
      exposedModule: "./Component"
    });
    this.viewContainer.createComponent(m.AppComponent);
  }
}
