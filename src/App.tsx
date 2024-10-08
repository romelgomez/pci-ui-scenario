import { useRef } from 'react';
import NeoGrid from './components/Grid';

const App = () => {
  const gridRef = useRef<any>(null);

  const clearFiltersAndSorters = () => {
    if (gridRef.current) {
      gridRef.current.api?.applyColumnState({
        defaultState: { sort: null },
      });

      gridRef.current.api.setFilterModel(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginRight: '15px' }}>Near-Earth Object Overview</h1>
        <button onClick={clearFiltersAndSorters} type={'button'}>
          Clear Filters and Sorters
        </button>
      </div>
      <NeoGrid gridRef={gridRef} />
    </div>
  );
};

export default App;
