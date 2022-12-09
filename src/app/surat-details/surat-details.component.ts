import { Component, OnInit, Input } from '@angular/core';
import { Surat } from '../surat/surat.component';

@Component({
  selector: 'app-surat-details',
  templateUrl: './surat-details.component.html',
  styleUrls: ['./surat-details.component.css']
})
export class SuratDetailsComponent implements OnInit {
  @Input() surat: Surat | any;
  constructor() { }

  ngOnInit(): void {
  }

}
