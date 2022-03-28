
export class FieldType<T> {
  value: T | string;
  label: string;
  key: string;
  required: boolean;
  order: number;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T | string;
      label?: string;
      key?: string;
      required?: boolean;
      order?: number;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value || '';
    this.label = options.label || '';
    this.key = options.key || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || '';
    this.options = options.options || [];
  }
}

// defining all the fields used in the app
export const FieldInfo: { [key: string]: FieldType<any> } = {
    id: new FieldType<number>({
      label: 'id',
      key: 'id',
      required: true,
      order: 1,
      type: 'number',
    }),
    name: new FieldType<string>({
      label: 'Name',
      key: 'name',
      required: true,
      order: 1,
      type: 'text',
    }),
    phone: new FieldType<number>({
      label: 'Phone',
      key: 'phone',
      required: true,
      order: 2,
      type: 'text',
    }),
    dob: new FieldType<Date>({
      label: 'DOB',
      key: 'dob',
      required: true,
      order: 2,
      type: 'date',
    }),
    company: new FieldType<string>({
      label: 'Company',
      key: 'company',
      required: true,
      order: 3,
      type: 'text',
    }),
    email: new FieldType<string>({
      label: 'Email ID',
      key: 'email',
      required: true,
      order: 3,
      type: 'email',
    }),
    active: new FieldType<boolean>({
      label: 'Is Active',
      key: 'active',
      required: true,
      order: 4,
      type: 'checkbox',
    }),
    fresher: new FieldType<boolean>({
      label: 'Is New',
      key: 'fresher',
      required: true,
      order: 4,
      type: 'checkbox',
    }),
    organisationId: new FieldType<number>({
      label: 'Organisation ID',
      key: 'organisationId',
      required: false,
      order: 5,
      type: 'dropdown',
    }),
    orgUniqueId: new FieldType<number>({
      label: 'Organisation Unique ID',
      key: 'orgUniqueId',
      required: true,
      order: 5,
      type: 'number',
    }),
    createdOn: new FieldType<string>({
      label: 'Created On',
      key: 'createdOn',
      required: true,
      order: 2,
      type: 'date',
    }),
    roleName: new FieldType<string>({
      label: 'Role Name',
      key: 'roleName',
      required: true,
      order: 1,
      type: 'dropdown'
    }),
    description: new FieldType<string>({
      label: 'Description',
      key: 'description',
      required: true,
      order: 1,
      type: 'text',
    }),
    startDate: new FieldType<Date>({
      label: 'Start Date',
      key: 'startDate',
      required: true,
      order: 2,
      type: 'date',
    }),
    endDate: new FieldType<Date>({
      label: 'End Date',
      key: 'endDate',
      required: true,
      order: 2,
      type: 'date',
    }),
    isRecurring: new FieldType<boolean>({
      label: 'Is Recurring',
      key: 'isRecurring',
      required: true,
      order: 4,
      type: 'checkbox',
    }),
    numberOfOccurence: new FieldType<number>({
      label: 'Number Of Occurence',
      key: 'numberOfOccurence',
      required: true,
      order: 2,
      type: 'number',
    }),
    occurence: new FieldType<string>({
      label: 'Occurence',
      key: 'occurence',
      required: true,
      order: 1,
      type: 'text',
    }),
    tags:new FieldType<any>({
      label: 'Tags',
      key: 'tags',
      required: true,
      order: 1,
      type: 'multidropdown',
    })
  };
  
  
  