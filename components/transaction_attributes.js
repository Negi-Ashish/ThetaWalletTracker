import { format } from "date-fns";

export const COLUMNS_2 = [
  {
    Header: "From",
    accessor: "from",
    Footer: "From",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "To",
    accessor: "to",
    Footer: "To",
    disableFilters: true,
    // Filter: ColumnFilter
  },
  {
    Header: "Theta Sent",
    accessor: "theta_sent",
    Footer: "Theta Sent",
    // Filter: ColumnFilter
  },
  {
    Header: "Theta Received",
    accessor: "theta_received",
    Footer: "Theta Received",
  },
  {
    Header: "Tfuel Sent",
    accessor: "tfuel_sent",
    Footer: "Tfuel Sent",
    // Filter: ColumnFilter
  },
  {
    Header: "Tfuel Received",
    accessor: "tfuel_received",
    Footer: "Tfuel Received",
  },
  {
    Header: "Fee",
    accessor: "fee",
    Footer: "Fee",
    disableFilters: true,
    // Filter: ColumnFilter
  },
  {
    Header: "Block Height",
    accessor: "block_height",
    Footer: "Block Height",
    // Filter: ColumnFilter
  },
  {
    Header: "Timestamp",
    accessor: "timestamp",
    Footer: "Timestamp",
    Cell: ({ value }) => {
      let date1 = new Date(value*1000)
      return `${date1.getDate()}-${date1.getMonth()+1}-${date1.getFullYear()}`;
      
    }
  //   Cell: ({ value }) => {
  //     return format(new Date(value), 'dd/MM/yyyy');
  // }
    // Filter: ColumnFilter
  },
];
