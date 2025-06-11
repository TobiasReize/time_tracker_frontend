import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private apiService = inject(ApiService);
  private router = inject(Router);


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.valid) {
      const payload = {
        username: ngForm.value.username,
        password: ngForm.value.password
      };
      this.apiService.postData(environment.config.LOGIN_URL, payload).subscribe({
        next: data => {
          console.log('response data: ', data);
          this.setCurrentUser(data);
          this.router.navigateByUrl('check-in');
        },
        error: err => {
          console.log('Error: ', err);
        }
      })
    }
    console.log(ngForm.value);
    ngForm.resetForm();
  }


  setCurrentUser(data: any) {
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('user_id', data.user_id);
    sessionStorage.setItem('token', data.token);
  }

}
