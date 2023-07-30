import Layout from './Layouts/Layout';
import {Routes, Route} from 'react-router-dom';
import Page from './components/Pages'
import 'material-symbols';

const App = () => {
  return (
    <div className='flex justify-center w-screen m-0 p-0'>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="investing" element={<Page title="Investing"/>}></Route>
          <Route path="business" element={<Page title="Business"/>}></Route>
          <Route path="earnings" element={<Page title="Earnings"/>}></Route>
          <Route path="items" element={<Page title="Items"/>}></Route>
          <Route path="profile" element={<Page title="Profile"/>}></Route>
          <Route path="investing/stock_market" element={<Page title="Stock market"/>}></Route>
          <Route path="investing/my_shares" element={<Page title="My shares"/>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
