import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-enterprise";
import { ClipboardModule } from "ag-grid-enterprise";
import formatPotentiallyHazardous from '../formatters/format-potentially-hazardous';
import { columnDefs } from '../config/column-defs';
import data from "../data/near-earth-asteroids.json";
import "ag-grid-enterprise/styles/ag-grid.css";
import "ag-grid-enterprise/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([ClipboardModule]);

const processed = data.map(item => ({
  ...item,
  pha: formatPotentiallyHazardous(item.pha),
}));

const NeoGrid = ({ gridRef }: { gridRef: any }): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <AgGridReact
        ref={gridRef}
        rowData={processed}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
        defaultColDef={{
          sortable: true,
          filter: true,
        }}
        domLayout='autoHeight'
        enableCellTextSelection={true}
        cellSelection={true}
        copyHeadersToClipboard={true}
      />
    </div>
  );
};

export default NeoGrid;
