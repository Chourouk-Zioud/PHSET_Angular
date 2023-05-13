import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from 'src/app/Models/Certificate';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements OnInit {
  certificates!: Certificate[];

  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.retrieveAllCertificates().subscribe((res) => {
      console.log(res);
      this.certificates = res;
    });
  }

  viewCertifs(certificate: Certificate) {
    let i = this.certificates.indexOf(certificate);
  }
}
