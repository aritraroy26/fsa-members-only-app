import { Component, Input, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../types';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css'],
})
export class GroupsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() groups: Group[] = [];

  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {}

  onClickAsktoJoin(groupId: string): void {
    this.groupsService
      .requestToJoinGroup(groupId)
      .subscribe(() => alert('Successfully submitetd request!'));
  }
}
