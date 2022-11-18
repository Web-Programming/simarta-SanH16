import { Component, OnInit } from '@angular/core';

//Buat Class Model untuk data Berkas
export class Berkas {
  'nama_berkas': string;
  'no_berkas': any; //number / string
  'jenis_file': string;
  'pemilik': string[];

}

@Component({
  selector: 'app-berkas',
  templateUrl: './berkas.component.html',
  styleUrls: ['./berkas.component.css']
})
export class BerkasComponent implements OnInit {

  constructor() { }

  listBerkas : Berkas[] = [
    {
      nama_berkas: 'Dokumentasi Kegiatan',
      no_berkas: 'B101',
      jenis_file: '.doc',
      pemilik: ['Adhitya Hasan', 'Sunny']
    },
    {
      nama_berkas: 'Perancangan Web',
      no_berkas: 'B102',
      jenis_file: '.pdf',
      pemilik: ['James Alexander']
    },
    {
      nama_berkas: 'Penelitian COVID-19',
      no_berkas: 'B103',
      jenis_file: '.txt',
      pemilik: ['Ahmad Farisi', 'Nur Rachmat']
    },
  ]

  ngOnInit(): void {
  }

}
