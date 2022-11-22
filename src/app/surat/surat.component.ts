import { Component, OnInit } from '@angular/core';
import { SimartaDataService } from '../simarta-data.service';

//Buat Class Model untuk data Surat
export class Surat {
  '_id': string;
  'nomor_surat': string;
  'tgl_surat': any; //number / string
  'jenis_surat': string;
  'uraian': string;
  'pejabat_penandatangan': string;
  'nama_penandatangan': string;
  'nama_ditugaskan': string[];

}

@Component({
  selector: 'app-surat',
  templateUrl: './surat.component.html',
  styleUrls: ['./surat.component.css']
})
export class SuratComponent implements OnInit {

  constructor(private simartaDataService: SimartaDataService) { }

  // listSurat : Surat[] = [
  //   {
  //     _id: '1',
  //     nomor_surat: '001001',
  //     tgl_surat: '2022-11-01',
  //     jenis_surat: 'Surat Tugas',
  //     uraian: 'ini adalah uraian',
  //     pejabat_penandatangan: 'Kaprodi SI',
  //     nama_penandatangan: 'Iis Pradesan',
  //     nama_ditugaskan: ['Nur Rachmat']
  //   },
  //   {
  //     _id: '2',
  //     nomor_surat: '001002',
  //     tgl_surat: '2022-11-02',
  //     jenis_surat: 'Surat Keputusan',
  //     uraian: 'ini adalah uraian',
  //     pejabat_penandatangan: 'Kaprodi SI',
  //     nama_penandatangan: 'Iis Pradesan',
  //     nama_ditugaskan: ['Nur Rachmat', 'Yohannes']
  //   },
  //   {
  //     _id: '3',
  //     nomor_surat: '001003',
  //     tgl_surat: '2022-11-03',
  //     jenis_surat: 'Surat Probadi',
  //     uraian: 'ini adalah uraian',
  //     pejabat_penandatangan: 'Kaprodi SI',
  //     nama_penandatangan: 'Iis Pradesan',
  //     nama_ditugaskan: ['Nur Rachmat', 'Fransiska']
  //   },
  // ]

  public listSurat: Surat[] = []

  public getListSurat(): void {
    this.simartaDataService.getListSurat().then(response => this.listSurat = response)
  }

  ngOnInit(): void {
    this.getListSurat();
  }

}
