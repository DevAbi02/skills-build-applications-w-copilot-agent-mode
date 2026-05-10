

import octofitLogo from './octofitapp-small.png';


function App() {
  return (
    <div className="container py-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={octofitLogo} alt="Octofit Logo" className="octofit-logo" />
          Octofit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/activities">Activities</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/teams">Teams</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="text-center mt-5"><h1 className="display-4">Welcome to <span className="text-primary">Octofit Tracker</span></h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard!</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
