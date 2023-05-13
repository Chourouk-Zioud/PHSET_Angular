import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/Models/Chapter';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css'],
})
export class ChapterItemComponent implements OnInit {
  @Input() chapter!: Chapter;
  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getChapterById(id).subscribe((data: Chapter) => {
      this.chapter = data;
    });
  }
}
