import Link from 'next/link'
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
    Header: "Transaction Fee",
    accessor: "fee",
    Footer: "Transaction Fee",
    disableFilters: true,
    Cell: ({ value }) => {
      // console.log("FEE",(Math.round(value * 100) / 100).toFixed(2)=="NaN")
      if((Math.round(value * 100) / 100).toFixed(2)=="NaN"==true){
        return "Fee"
      }
      return `~${(Math.round(value * 100) / 100).toFixed(2)} `;
      
    }
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
  },
  {
    Header: "View Transaction",
    accessor: "view_transaction",
    Footer: "View Transaction",
    // Filter: ColumnFilter,
    disableFilters: true,
    Cell: ({ value }) => {
      let URL;
      if(value == undefined){
        URL = `https://explorer.thetatoken.org/txs/`
      }
      else{
        URL = `https://explorer.thetatoken.org/txs/${value}`
      }
      return (
        <Link href={URL} passHref>
          <a target="_blank" rel="noopener noreferrer">
          view
          </a>
        </Link>
        )
      
    }
  },
  
  
];
