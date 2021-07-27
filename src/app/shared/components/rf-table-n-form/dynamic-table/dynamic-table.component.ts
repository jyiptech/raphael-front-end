import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { FieldType } from '../../../constants/field-info';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input() colFields: Array<FieldType<string>> = [] as Array<FieldType<string>>;
  @Input() colData: any;
  @Output() onEdit = new EventEmitter<FieldType<any>>();
  constructor() { }

  ngOnInit(): void {
  }

  onEditForm(rowData: FieldType<any>) {
    this.onEdit.emit(rowData)
  }

}
