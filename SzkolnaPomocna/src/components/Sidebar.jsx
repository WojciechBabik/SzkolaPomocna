import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-60 h-full border-r border-slate-200 p-4">
      
      <div className="flex items-center mb-6">
        <Wrench className="w-8 h-8 text-blue-600 mr-2" />
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-900 w-fit">
          HelpDesk
        </h2>
      </div>

      <ul className="space-y-2">
        <li><Link to="/">Zgłoszenia</Link></li>
        <li><Link to="/add">Dodaj</Link></li>
        <li><Link to="/dashboard">Statystyki</Link></li>
        <li><Link to="/history">Historia</Link></li>
      </ul>
      
    </div>
  );
}

export default Sidebar;