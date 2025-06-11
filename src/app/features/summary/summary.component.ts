import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

  private location = inject(Location);
  selectedDate: string = '';
  date: string = 'Please select a date...';

  dummyData = [
    {
      end: '1749613305106',
      start: '1749611105106'
    },
    {
      end: '1749633305106',
      start: '1749623305106'
    }
  ];


  goBack() {
    this.location.back();
  }


  selectDate() {
    if (this.selectedDate) {
      console.log('selectedDate: ', this.selectedDate);
      this.date = this.formatDate(this.selectedDate);
    }
  }


  formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  }

}
