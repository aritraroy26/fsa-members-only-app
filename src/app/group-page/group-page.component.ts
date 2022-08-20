import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../groups.service';
import { Group } from '../types';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css'],
})
export class GroupPageComponent implements OnInit {
  isLoadingGroup: boolean = true;
  group: Group | null = null;
  messageValue: string = '';
  groupId: string = '';

  constructor(
    private route: ActivatedRoute,
    private groupsService: GroupsService
  ) {}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.params.id;
    this.groupsService.getGroupById(this.groupId).subscribe((group) => {
      this.group = group;
      this.isLoadingGroup = false;
    });
  }

  addMessage(): void {
    this.groupsService
      .addMessage(this.messageValue, this.groupId)
      .subscribe((updatedGroup) => {
        this.group = updatedGroup;
        this.messageValue = '';
      });
  }

  acceptRequest(requestId: string): void {
    this.groupsService.acceptRequest(requestId).subscribe((updatedRequests) => {
      this.group!.requests = updatedRequests;
    });
  }

  rejectRequest(requestId: string): void {
    this.groupsService.rejectRequest(requestId).subscribe((updatedRequests) => {
      this.group!.requests = updatedRequests;
    });
  }
}
