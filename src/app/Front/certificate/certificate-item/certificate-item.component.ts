import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from 'src/app/Models/Certificate';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-certificate-item',
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.css'],
})
export class CertificateItemComponent implements OnInit {
  @Input() certificate!: Certificate;
  @Output() viewCertifs = new EventEmitter<Certificate>();
  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  sentNotif() {
    this.viewCertifs.emit(this.certificate);
  }

}
