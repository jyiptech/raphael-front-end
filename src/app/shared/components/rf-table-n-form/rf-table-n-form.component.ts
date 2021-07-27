import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { RfTableNFormService } from '../../services/rf-table-n-form.service';
import { RfModalComponent } from '../rf-modal/rf-modal.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldType } from '../../constants/field-info';

@Component({
  selector: 'app-rf-table-n-form',
  templateUrl: './rf-table-n-form.component.html',
  styleUrls: ['./rf-table-n-form.component.scss'],
})
export class RfTableNFormComponent implements OnInit {
  readonly filterFields = ['id', 'createdOn', 'orgUniqueId'];

  selectedPage: string = '';
  tableContent: any;
  dynFields: Array<FieldType<string>> = [] as Array<FieldType<string>>;
  isLoading: boolean = false;
  @ViewChild(DynamicFormComponent) private dynFormElt!: DynamicFormComponent;
  @ViewChild(RfModalComponent) private rfmodal!: RfModalComponent;

  constructor(
    private route: ActivatedRoute,
    private rfService: RfTableNFormService,
    private configSer: ConfigService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // get selected page from sidenav
      this.selectedPage = params['pagename'];
      if (this.selectedPage) {
        // get field names, and info related to it.
        this.rfService.setCurrentPage(this.selectedPage);

        // REMOVING FIELDS SUCH AS ID, CREATEDON,... CZ THOSE ARE NOT DISPLAYED IN THE FORM
        this.dynFields = this.rfService
          .getFields(this.selectedPage)
          .filter((field:FieldType<any>) => this.filterFields.indexOf(field.key) == -1);

          // GET ALL DATA FOR TABLE
        this.getAllData(this.selectedPage);
      }
    });
  }

  // EDIT FORM
  edit(colData: FieldType<any>) {
    this.dynFormElt.onEditForm(colData);
    this.rfmodal.open();
  }

  getAllData(page: string) {
    this.isLoading = true;
    this.tableContent = [];
    if (!page) {
      return;
    }
    // POPULATE TABLE'S DATA
    this.configSer.getAllData(page).subscribe((data) => {
      this.tableContent = data;
      this.isLoading = false;
    }, (err)=>{
      this.isLoading = false;
      alert(err)
    });
  }

  //----------OPEN AND CLOSE MODAL-------------
  openModal() {
    this.rfmodal.open();
  }
  closeModal() {
    this.rfmodal.close();
    this.getAllData(this.selectedPage);
  }
}