import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ import FormsModule

@Component({
  selector: 'app-booking',
  imports: [FormsModule], // ✅ add here
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingData = {
    name: '',
    seats: 1
  };

  confirmationMessage = '';

  bookTicket() {
    this.confirmationMessage = `Thank you, ${this.bookingData.name}! Your ${this.bookingData.seats} seat(s) have been booked.`;
    this.bookingData = { name: '', seats: 1 };
  }
}
