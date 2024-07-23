import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informasi',
  templateUrl: './informasi.component.html',
  styleUrls: ['./informasi.component.scss']
})
export class InformasiComponent implements OnInit {
  products = [
    { id: 1, name: 'RUCIKA STANDARD', company: 'PT. Wahana Duta Jaya Rucika', address: 'Altro Building, 7th Floor Jl. Kesehatan Raya No. 48 (Samping) Jakarta Kota, Indonesia', image: 'assets/img/brand/produk1.png' },
    { id: 2, name: 'RAINWATER INFILTRATION', company: 'PT. Wahana Duta Jaya Rucika', address: 'Altro Building, 7th Floor Jl. Kesehatan Raya No. 48 (Samping) Jakarta Kota, Indonesia', image: 'assets/img/brand/produk2.png' },
    { id: 3, name: 'RUCIKA TELECOM', company: 'PT. Wahana Duta Jaya Rucika', address: 'Altro Building, 7th Floor Jl. Kesehatan Raya No. 48 (Samping) Jakarta Kota, Indonesia', image: 'assets/img/brand/produk3.png' },
    { id: 4, name: 'WASSER', company: 'PT. Wahana Duta Jaya Rucika', address: 'Altro Building, 7th Floor Jl. Kesehatan Raya No. 48 (Samping) Jakarta Kota, Indonesia', image: 'assets/img/brand/produk4.png' },
    { id: 5, name: 'Genteng Tora – Tora', company: 'PT. KENCANA MAJU BERSAMA SEMARANG', address: 'Jl. Samudera 1977, Oldaksono, Kota Semarang', image: 'assets/img/brand/produk5.png' },
    { id: 6, name: 'Atap Gelombang Ecoclip', company: 'PT. KENCANA MAJU BERSAMA SEMARANG', address: 'Jl. Samudera 1977, Oldaksono, Kota Semarang', image: 'assets/img/brand/produk6.png' }
  ];

  ngOnInit(): void { }
}
