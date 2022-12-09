import { Component, OnInit } from '@angular/core';
import { SimartaDataService  } from '../simarta-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Surat } from '../surat/surat.component';
import { Berkas } from '../berkas/berkas.component';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private simartaDataService: SimartaDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pageContent.page = this.route.snapshot.url[0].path;
    if(this.pageContent.page === 'surat') {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) => {
          let id = params.get("suratId");
          return this.simartaDataService.getSuratById(id);
        })
      )
      .subscribe((newSurat: Surat) => {
        this.dataSurat = newSurat;
        this.pageContent.header.title = "Detail Surat : " + newSurat.nomor_surat + " - " + newSurat.jenis_surat;
      })
    }else if (this.pageContent.page === 'berkas') {
      this.pageContent.header.title = "Berkas Adhitya : ";
    }
  }

  dataSurat: Surat = {
    _id: '',
    nomor_surat: '',
    tgl_surat: undefined,
    jenis_surat: '',
    uraian: '',
    pejabat_penandatangan: '',
    nama_penandatangan: '',
    nama_ditugaskan: []
  }

  dataBerkas: Berkas = {
    nama_berkas: '',
    no_berkas: undefined,
    jenis_file: '',
    pemilik: []
  }

  public pageContent = {
    header: {
      title: "Judul ...",
      stripeline: "",
    },
    sidebar: "",
    page: "Surat",
  }

}
