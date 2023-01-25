import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-master-grid',
  templateUrl: './master-grid.component.html',
  styleUrls: ['./master-grid.component.css']
})
export class MasterGridComponent implements OnInit {
  @Input() columnDefs: any;
  @Input() rowData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
