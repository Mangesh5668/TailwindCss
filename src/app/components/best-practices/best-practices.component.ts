import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-practices',
  templateUrl: './best-practices.component.html',
  styleUrls: ['./best-practices.component.css']
})
export class BestPracticesComponent implements OnInit {
  columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Preferred Frequency (Days)', field: 'preferredFrequency'},
    {headerName: 'Status', field: 'status'},
    {headerName: 'Created Date', field: 'createdDate'},
    {headerName: 'Updated By', field: 'updatedBy'}
];

rowData = [
    {name: 'HVAC at building level', preferredFrequency: 5 , status: 'Active', createdDate: 'Jan 5 2023, 15:04', updatedBy: 'yashhaste5@gmail.com' },
    {name: 'HVAC at system level', preferredFrequency: 10 , status: 'Active', createdDate: 'Jan 5 2023, 15:05', updatedBy: 'yashhaste5@gmail.com' },
    {name: 'HVAC at equipment level', preferredFrequency: 10 , status: 'Active', createdDate: 'Jan 5 2023, 15:05', updatedBy: 'yashhaste5@gmail.com' },
];
  constructor() { }

  ngOnInit(): void {
  }

}
