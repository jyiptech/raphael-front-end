// page to fields name mapping
// make sure the property name (name,phone,dob) are consistent and same throughout the three  mappings

export interface PageInfoType {
  fields: Array<string>;
  logo: string;
  getApis: string;
  postApis: string;
  
}

// export enum Role {
//   SUPER_ADMIN = 1,
//   ADMIN = 2,
//   MODERATOR=3,
//   USER=4
// }
export const Roles =  ['SUPERADMIN','ADMIN','MODERATOR','USER'];
export const PageInfo: { [key: string]: PageInfoType } = {
  contact: {
    fields: [
      'id',
      'name',
      'phone',
      'dob',
      'company',
      'tags',
      'email',
      'active',
      'fresher',
      'createdOn',
    ],
    logo: 'person-plus',
    getApis: 'contact/all',
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
    getApis: 'role/getAll',
    postApis: 'role/createRole',
  },
  tag: {
    fields: ['id', 'createdOn', 'name'],
    logo: 'bookmark',
    getApis: 'tag/all',
    postApis: 'tag',
  },
  users: {
    fields: ['id', 'name', 'phone','roleName','email','organisationId'],
    logo: 'people',
    getApis: 'users',
    postApis: 'users',
  },
  // event: {
  //   fields: [
  //     'name',
  //     'description',
  //     'startDate',
  //     'endDate',
  //     'isRecurring',
  //     'numberOfOccurence',
  //     'occurence',
  //   ],
  //   logo: 'calendar-event',
  //   getApis: 'event/getAllEvents',
  //   postApis: 'event',
  // },
};
