import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.scss']
})
export class BeritaComponent implements OnInit {

  beritaList = [
    {
      date: '03 July 2024',
      title: 'SOSIALISASI DAN DISEMINASI PERATURAN JASA KONSTRUKSI UNTUK PENYEDIA JASA TAHUN 2024',
      image: 'assets/img/brand/berita1.png'
    },
    {
      date: '02 July 2024',
      title: 'SOSIALISASI DAN DISEMINASI PERATURAN JASA KONSTRUKSI UNTUK PENGGUNA JASA TAHUN 2024',
      image: 'assets/img/brand/berita2.png'
    },
    {
      date: '25 June 2024',
      title: 'UJI SERTIFIKASI TENAGA KERJA KONSTRUKSI JENJANG 7 PROGRAM APRESIASI OPD SUB URUSAN JASA KONSTRUKSI TERBAIK',
      image: 'assets/img/brand/berita3.png'
    },
    {
      date: '06 June 2024',
      title: 'UJI SERTIFIKASI TENAGA KERJA KONSTRUKSI JENJANG 7 PROGRAM APRESIASI OPD SUB URUSAN JASA KONSTRUKSI TERBAIK',
      image: 'assets/img/brand/berita4.png'
    },
    {
      date: '16 May 2024',
      title: 'UJI SERTIFIKASI TENAGA KERJA KONSTRUKSI JENJANG 7 PROGRAM APRESIASI OPD SUB URUSAN JASA KONSTRUKSI TERBAIK',
      image: 'assets/img/brand/berita5.png'
    }
  ];

  beritaLainnyaList = [
    { date: '18 May 2024', title: 'PELATIHAN DAN FASILITASI SERTIFIKASI TENAGA KERJA KONSTRUKSI KUALIFIKASI AHLI TAHAP 2 TAHUN 2024' },
    { date: '07 May 2024', title: 'WORKSHOP SISTEM INFORMASI PEMBINA JASA KONSTRUKSI (SIPJAKI) KABUPATEN MUSI BANYUASIN TAHUN 2024' },
    { date: '30 April 2024', title: 'WORKSHOP / SARASEHAN PELAKU JASA KONSTRUKSI KABUPATEN MUSI BANYUASIN TAHUN 2024' },
    { date: '08 March 2024', title: 'FASILITASI UJI SERTIFIKASI TENAGA KERJA KONSTRUKSI KUALIFIKASI AHLI TAHUN 2024 TAHAP I' },
    { date: '08 March 2024', title: 'PELATIHAN DAN FASILITASI SERTIFIKASI TENAGA KERJA KONSTRUKSI KUALIFIKASI AHLI TAHUN 2024 TAHAP I' }
  ];

  pengumumanList = [
    { date: '07-05-2024', title: 'Penerimaan Pegawai DPUBMCK' },
    { date: '01-05-2024', title: 'DIP 2024' },
    { date: '15-05-2024', title: 'Surat Edaran Direktur Jendral Bina Konstruksi Nomor 73/SE/DK/2023' }
  ];

  currentPage = 1;
  totalPages = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit(): void { }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }
}
