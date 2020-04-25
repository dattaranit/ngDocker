import { Component } from '@angular/core';
import { DockerService } from './docker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ds: DockerService) {
  }

  title = 'Deploy Angular App to Docker v2';

  eventFunc() {
    this.ds.getEmployees().subscribe((data) => {
      alert(data);
    });
  };
}
