import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss'
})
export class CheckInComponent {

  state: 'play' | 'stop' = 'stop';
  startTime: number = 0;
  endTime: number = 0;


  start() {
    if (this.state === 'stop') {
      this.state = 'play';
      this.startTime = Date.now();
    }
  }


  stop() {
    if (this.state === 'play') {
      this.state = 'stop';
      this.endTime = Date.now();
      console.log('Time: ', (this.endTime - this.startTime)/1000, 's');
    }
  }

}
