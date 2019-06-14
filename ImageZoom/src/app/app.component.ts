import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ImageZoom';

  imageSrc = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
}
