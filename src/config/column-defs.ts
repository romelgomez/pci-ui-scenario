import { ColDef } from "ag-grid-enterprise";
import formatDiscoveryDate from '../formatters/format-discovery-date';

export const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", sortable: true, filter: 'agTextColumnFilter' },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    filter: 'agDateColumnFilter',
    valueFormatter: (params) => formatDiscoveryDate(params.value),
  },
  { field: "h_mag", headerName: "H (mag)", sortable: true, filter: 'agTextColumnFilter' },
  { field: "moid_au", headerName: "MOID (au)", sortable: true, filter: 'agTextColumnFilter' },
  { field: "q_au_1", headerName: "q (au)", sortable: true, filter: 'agTextColumnFilter' },
  { field: "q_au_2", headerName: "Q (au)", sortable: true, filter: 'agTextColumnFilter' },
  { field: "period_yr", headerName: "Period (yr)", sortable: true, filter: 'agTextColumnFilter' },
  { field: "i_deg", headerName: "Inclination (deg)", sortable: true, filter: 'agTextColumnFilter' },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    filter: 'agTextColumnFilter',
  },
  { field: "orbit_class", headerName: "Orbit Class", sortable: true, filter: 'agTextColumnFilter' },
];

