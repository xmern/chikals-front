import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: false,
  
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.css']
})
export class ContactModalComponent {

  @Output() closeModal = new EventEmitter<void>();

  private readonly phoneNumber: string = '2348022799368'; // international format, no +
  private readonly emailAddress: string = 'inboxchikals@gmail.com';
  private readonly defaultMessage: string = "Hi! I'd like to enquire about your HVAC services.";

  userMessage: string = '';

  close(): void {
    this.closeModal.emit();
  }

  /** Resolves the message to send — falls back to default if textarea is empty */
  private getMessage(): string {
    return this.userMessage.trim() || this.defaultMessage;
  }

  /** Opens Gmail compose with the address and message pre-filled */
  getEmailLink(): string {
    const subject = encodeURIComponent('Enquiry – Chikals Cooling Systems');
    const body = encodeURIComponent(this.getMessage());
    return `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
  }

  /** Opens WhatsApp with the phone number and message pre-filled */
  openWhatsApp(): void {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.getMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}