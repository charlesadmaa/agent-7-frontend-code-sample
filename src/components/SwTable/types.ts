  export type TableHeadersDataType = {
    name: String;
    title: String;
    sortable: Boolean;
    key?: String
    align: 'left' | 'right' | 'center' | undefined
  }
  export interface TableHeadersData extends Array<TableHeadersDataType> { }
