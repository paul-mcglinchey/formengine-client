import {
  NavLink
} from 'react-router-dom';

const NavigationLink = ({ title, route }) => {
  return (
    <NavLink
      className="font-bold text-lg"
      to={route}>{title}
    </NavLink>
  )
}

export default NavigationLink;