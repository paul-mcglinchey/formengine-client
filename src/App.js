import { useState } from 'react';
import validate from './fetches/validate';
import { CheckIcon, XIcon } from '@heroicons/react/outline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from 'react-router-dom';
import formSchema from './validationSchema/formSchema';
import DynamicForm from './components/DynamicForm';

const App = () => {

  const [issues, setIssues] = useState();
  const [issuesOpen, setIssuesOpen] = useState(false);

  const toggleIssuesOpen = () => setIssuesOpen(!issuesOpen);

  const location = useLocation;

  return (
    <div className="App flex flex-col">
      <div className="flex justify-between border-b-2 border-green-500 mb-6 px-4 py-1 items-center">
        <h1 className="text-4xl font-bold tracking-wide">Validator</h1>
        <div className="bg-gray-200 px-2 rounded">
          <button onClick={() => toggleIssuesOpen()} className="font-semibold tracking-wide text-lg flex items-center">
            {issues && Array.isArray(issues) ? issues.length : 0} validation issues
            {issues && !Array.isArray(issues) && (
              <CheckIcon className="ml-2 text-green-500 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 px-4">
        <Router>
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <div className="flex space-x-4">
              {formSchema.sections.map((s, i) => (
                <NavLink className="font-semibold hover:text-gray-500 active:text-gray-500" key={i} to={`/${s.name}`}>{s.name}</NavLink>
              ))}
            </div>
            <Routes>
              {formSchema.sections.map((s, i) => (
                <Route path={`/${s.name}`} key={i} element={<DynamicForm key={i} location={location} formSchema={s.fields} />} />
              ))}
            </Routes>
          </div>
        </Router>
        {issuesOpen && (
          <div className="w-full md:w-1/2 border-2 p-2 flex flex-col rounded">
            <div className="flex items-center justify-between text-lg font-bold border-b-2">
              <div>
                Validation issues
              </div>
              <button onClick={() => toggleIssuesOpen()}>
                <XIcon className="w-5 h-5 text-red-500" />
              </button>
            </div>
            <div>
              {issues && Array.isArray(issues) && issues.length > 0 ? (
                <div className="flex flex-col">
                  {issues.map((i, key) => {
                    return <div className="text-red-500 text-md tracking-wide border border-gray-500 rounded my-2 -mb-1 px-1" key={key}>{i.Message}</div>
                  })}
                </div>
              ) : (
                <span className="text-sm font-semibold text-gray-500">No validation issues found</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default App;
