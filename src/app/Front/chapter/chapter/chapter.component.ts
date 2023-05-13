import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/Models/Chapter';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
})
export class ChapterComponent implements OnInit {
  chapters!: Chapter[];
  id!: number;
  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.retrieveChaptersByIdCourse(this.id).subscribe((res) => {
      console.log(res);
      this.chapters = res;
    });
  }
}