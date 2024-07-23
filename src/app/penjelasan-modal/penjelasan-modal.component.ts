import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-penjelasan-modal',
  templateUrl: './penjelasan-modal.component.html',
  styleUrls: ['./penjelasan-modal.component.scss']
})
export class PenjelasanModalComponent {
  @Input() show = false;
  @Output() closeEvent = new EventEmitter<void>();

  close(event: MouseEvent): void {
    event.stopPropagation();
    this.closeEvent.emit();
  }
}
