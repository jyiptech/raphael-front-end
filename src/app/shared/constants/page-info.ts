// page to fields name mapping
// make sure the property name (name,phone,dob) are consistent and same throughout the three  mappings

export interface PageInfoType {
  fields: Array<string>;
  logo: string;
  getApis: string;
  postApis: string;
}

export const PageInfo: { [key: string]: PageInfoType } = {
  contact: {
    fields: [
      'id',
      'name',
      'phone',
      'dob',
      'company',
      'email',
      'active',
      'fresher',
      'organisationId',
      'createdOn',
    ],
    logo: 'person-plus',
    getApis: 'contact/getAllContacts',
    postApis: 'contact/createContact',
  },
  organisation: {
    fields: ['id', 'createdOn', 'name', 'orgUniqueId'],
    logo: 'people',
    getApis: 'organisation',
    postApis: 'organisation',
  },
  role: {
    fields: ['id', 'createdOn', 'roleName'],
    logo: 'person-badge',
    getApis: 'role/getAllRoles',
    postApis: 'role/createRole',
  },
  tag: {
    fields: ['id', 'createdOn', 'name', 'organisationId'],
    logo: 'bookmark',
    getApis: 'tag/getAllTags',
    postApis: 'tag/createTag',
  },
  users: {
    fields: ['id', 'name', 'phone'],
    logo: 'people',
    getApis: 'users',
    postApis: 'users',
  },
  event: {
    fields: [
      'name',
      'description',
      'startDate',
      'endDate',
      'isRecurring',
      'numberOfOccurence',
      'occurence',
    ],
    logo: 'calendar-event',
    getApis: 'event/getAllEvents',
    postApis: 'event',
  },
};
