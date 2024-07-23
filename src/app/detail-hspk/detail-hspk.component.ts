import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-hspk',
  templateUrl: './detail-hspk.component.html',
  styleUrls: ['./detail-hspk.component.scss']
})
export class DetailHspkComponent {
  @Input() item: any;
  @Input() show: boolean = false;
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
