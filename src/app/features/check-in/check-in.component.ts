import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss'
})
export class CheckInComponent {

  private apiService = inject(ApiService);
  private router = inject(Router);
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
      this.sendData();
    }
  }


  sendData() {
    const payload = this.endTime - this.startTime;
    this.apiService.postData(environment.config.TIME_TRACKER_URL, payload).subscribe({
      next: data => {
        console.log('response data: ', data);
        this.router.navigateByUrl('#');
      },
      error: err => {
        console.log('Error: ', err);
      }
    })
  }

}
