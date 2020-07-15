import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-display-details',
  template: `<table border="1">
                <thead><tr><th>IP Address</th>
                           <th>collectionName</th>
                           <th>Method</th>
                        </tr>
                </thead>
                <tbody>
                    <tr  *ngFor="let table_content of table_contents">
                      <td>{{table_content.ipAddress}}</td>
                      <td>{{table_content.collectionName}}</td>
                      <td>{{table_content.method}}</td>
                    </tr>
                </tbody>
            </table>`,
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public table_contents = [];

  // tslint:disable-next-line:variable-name
  constructor(private _employeeService: GetDataService) { }

  ngOnInit(): void {
    this._employeeService.getdata()
      .subscribe((data: any) => this.table_contents = data.docs);
  }

}
