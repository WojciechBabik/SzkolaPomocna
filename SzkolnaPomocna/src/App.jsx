import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TicketList from './views/TicketList';
import AddTicket from './views/AddTicket';
import Dashboard from './views/Dashboard';
import HistoryLog from './views/HistoryLog';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen w-full overflow-hidden"> 
        
        <Sidebar /> 

        <div className="flex-1 bg-gray-100"> 
          <Routes>
            <Route path="/" element={<TicketList />} />
            <Route path="/add" element={<AddTicket />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/history" element={<HistoryLog />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;