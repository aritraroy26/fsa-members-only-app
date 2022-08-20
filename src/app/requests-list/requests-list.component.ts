import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Request } from '../types';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css'],
})
export class RequestsListComponent implements OnInit {
  @Input() requests: Request[] = [];
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onAcceptRequest(requestId: string): void {
    this.accept.emit(requestId);
  }

  onRejectRequest(requestId: string): void {
    this.reject.emit(requestId);
  }
}
