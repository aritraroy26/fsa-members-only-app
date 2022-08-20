import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../types';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[] = [];
  constructor() {}

  ngOnInit(): void {}
}
