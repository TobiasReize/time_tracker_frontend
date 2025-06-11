import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  private location = inject(Location);
  selectedDate: string = '';


  goBack() {
    this.location.back();
  }

}
