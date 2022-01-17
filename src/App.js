import { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import { FormView, FormBase, FormCreate } from './components/Forms';
import { NavBar } from './components/Nav';
import { ValidationIssues } from './components/ValidationPanel';

const App = () => {

  const [issues, setIssues] = useState();
  const [issuesOpen, setIssuesOpen] = useState(false);

  const toggleIssuesOpen = () => setIssuesOpen(!issuesOpen);

  document.addEventListener("click", evt => {
    const flyoutElement = document.getElementById("validation-issues");
    let targetElement = evt.target;

    if (targetElement === flyoutElement) {
      console.log('clicked inside');
      return;
    }

    issuesOpen && setIssuesOpen(false);
  })

  return (
    <div>
      <NavBar issues={issues} toggleIssuesOpen={toggleIssuesOpen} />
      <ValidationIssues 
        issuesOpen={issuesOpen}
        issues={issues}
        toggleIssuesOpen={toggleIssuesOpen}
      />
      <div className="font-sans subpixel-antialiased px-2 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          >
          </Route>
          <Route path="/forms/*" element={<FormView />} />
          <Route path="/forms/:id/*" element={<FormBase />} />
          <Route path="/createform" element={<FormCreate />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;
