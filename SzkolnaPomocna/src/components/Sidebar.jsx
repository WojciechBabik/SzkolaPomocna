import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 h-full border-r border-slate-200 p-4">
      <h2 className="text-xl font-bold mb-6">HelpDesk</h2>
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