import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../types';

@Component({
  selector: 'app-groups-list-page',
  templateUrl: './groups-list-page.component.html',
  styleUrls: ['./groups-list-page.component.css'],
})
export class GroupsListPageComponent implements OnInit {
  isLoadingAllGroups: boolean = true;
  isLoadingUserGroups: boolean = true;
  isLoading: boolean = true;
  allGroups: Group[] = [];
  userGroups: Group[] = [];
  notUserGroups: Group[] = [];

  constructor(private groupsService: GroupsService) {}

  ngOnInit(): void {
    this.groupsService.getGroups().subscribe((groups) => {
      this.allGroups = groups;
      this.isLoadingAllGroups = false;

      if (!this.isLoadingUserGroups) {
        this.isLoading = true;
        this.calculateNonUserGroups();
      }
    });

    this.groupsService.getGroupsForUser().subscribe((userGroups) => {
      this.userGroups = userGroups;
      this.isLoadingUserGroups = false;

      if (!this.isLoadingAllGroups) {
        this.isLoading = true;
        this.calculateNonUserGroups();
      }
    });
  }

  private calculateNonUserGroups() {
    this.notUserGroups = this.allGroups.filter((group) =>
      this.userGroups.every((userGroup) => userGroup.id !== group.id)
    );
  }
}
