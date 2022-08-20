import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.css'],
})
export class CreateGroupPageComponent implements OnInit {
  name: string = '';

  constructor(private router: Router, private groupsService: GroupsService) {}

  ngOnInit(): void {}

  onClickCreateGroup(): void {
    this.groupsService.createGroup(this.name).subscribe((newGroupId) => {
      this.router.navigateByUrl(`/groups/${newGroupId}`);
    });
  }
}
