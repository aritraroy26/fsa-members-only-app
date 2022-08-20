import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../types';

@Component({
  selector: 'app-my-groups-list',
  templateUrl: './my-groups-list.component.html',
  styleUrls: ['./my-groups-list.component.css'],
})
export class MyGroupsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  @Input() groups: Group[] = [];

  constructor() {}

  ngOnInit(): void {}
}
