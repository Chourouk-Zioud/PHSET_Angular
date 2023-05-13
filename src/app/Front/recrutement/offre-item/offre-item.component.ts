import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Offer } from 'src/app/Models/Offer';

@Component({
  selector: 'app-offre-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.css']
})
export class OffreItemComponent implements OnInit {

  @Input() offer!: Offer;
  @Output() index = new EventEmitter<Offer>();
  constructor() { }

  ngOnInit(): void {
  }

}
