import { CheckIcon } from '@heroicons/react/outline';
import { NavigationLink } from '.';
import {
  NavLink
} from 'react-router-dom';

const NavBar = ({ issues, toggleIssuesOpen }) => {
  return (
    <div className="flex justify-between border-b-2 border-green-500 mb-6 px-2 sm:px-6 lg:px-8 py-4 items-center">
      <div className="flex items-end space-x-8">
        <NavLink to="/" className="text-4xl font-bold tracking-wide">Form Engine</NavLink>
        <div className="flex space-x-4">
          <NavigationLink route="/dashboard" title="Dashboard" />
          <NavigationLink route="/forms" title="Forms" />
          <NavigationLink route="/createform" title="Create a form" />
        </div>
      </div>
      <div id="valiation-issues" className="hover:bg-zinc-800 px-2 rounded self-end">
        <button onClick={() => toggleIssuesOpen()} className="font-semibold tracking-wide text-lg flex items-center">
          {issues && Array.isArray(issues) ? issues.length : 0} validation issues
          {(!issues || !Array.isArray(issues)) && (
            <CheckIcon className="ml-2 text-green-500 w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  )
}

export default NavBar;