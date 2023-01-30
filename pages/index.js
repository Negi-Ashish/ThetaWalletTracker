import BasicTable from '../components/BasicTable';
import GroupTable from '../components/GroupTable';
import classes from '../styles/Home.module.scss';
import SortingTable from '../components/SortingTable';
import FilteringTable from '../components/FilteringTable';
import PaginationTable from '../components/PaginationTable';
import RowSelectionTable from '../components/RowSelectionTable';
import ColumnOrderTable from '../components/ColumnOrderTable';
import HidingColumnTable from '../components/ColumnHidingTable';
import WalletTracker from '../components/WalletTracker';

export default function Home() {
  return (
    <div className={classes.container}>
      <h1>Wallet Tracker (BETA)</h1>
      {/* <BasicTable /> */}
      <WalletTracker/>
      {/* <GroupTable /> */}
      {/* <SortingTable /> */} 
       {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      {/* <ColumnOrderTable /> */}
      {/* <HidingColumnTable /> */}
    </div>
  );
}
