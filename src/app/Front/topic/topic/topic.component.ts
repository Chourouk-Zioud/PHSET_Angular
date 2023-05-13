import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Topic } from 'src/app/Models/Topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  
  @Input() topic!: Topic;
  @Output() viewTopics = new EventEmitter<Topic>();

  constructor() {}

  ngOnInit(): void {}

  sentNotif() {
    this.viewTopics.emit(this.topic);
  }
}
