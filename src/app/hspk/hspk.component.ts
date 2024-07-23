import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hspk',
  templateUrl: './hspk.component.html',
  styleUrls: ['./hspk.component.scss']
})
export class HspkComponent implements OnInit {
  data = [
    { kode: 'A.1.1.1.1', uraian: 'Pembuatan 1 m2 steger / perancah dari bambu s.d. tinggi 6 meter', satuan: 'm2', harga: 'Rp 416.185,-' },
    { kode: 'A.4.1.1.1', uraian: 'Pembuatan 1 m3 Beton Mutu Fc = 7,4 Mpa (K100)', satuan: 'm3', harga: 'Rp 1.022.773,-' },
    // Add more data rows as needed
  ];

  currentPage = 1;
  itemsPerPage = 10;
  totalEntries = 1718;
  totalPages = Math.ceil(this.totalEntries / this.itemsPerPage);
  searchTerm: string = '';
  selectedKecamatan: string = '';
  pages: number[] = [];
  showModal = false;
  showDetailModal = false;
  selectedItem: any = null;

  ngOnInit(): void {
    this.updatePages();
  }

  updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Load data for the selected page
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Load previous page data
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      // Load next page data
    }
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

  openDetailModal(item: any) {
    this.selectedItem = item;
    this.showDetailModal = true;
  }

  closeDetailModal() {
    this.showDetailModal = false;
  }
}
