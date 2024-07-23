import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssh',
  templateUrl: './ssh.component.html',
  styleUrls: ['./ssh.component.scss']
})
export class SshComponent {
  selectedKecamatan: string = '';
  searchTerm: string = '';
  activeTab: string = 'bahan';
  showModal = false;

  constructor(private router: Router) {}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  navigateToPenjelasan() {
    this.openModal();
  }

  ngOnInit() {}
}
