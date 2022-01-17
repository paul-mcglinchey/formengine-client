import {
  NavLink
} from 'react-router-dom';

const NavigationLink = ({ title, route }) => {
  return (
    <NavLink
      className="font-bold text-lg hover:bg-zinc-800 rounded px-2"
      to={route}>{title}
    </NavLink>
  )
}

export default NavigationLink;