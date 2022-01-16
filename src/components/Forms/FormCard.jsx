import {
  NavLink
} from 'react-router-dom';

const FormCard = ({ f }) => {
  return (
    <NavLink to={f._id} className="flex flex-grow mx-2 my-2 p-4 rounded-lg transform hover:scale-105 transition-all bg-green-500">
      <div className="flex flex-grow justify-between items-start space-x-4">
        <h1 className="text-3xl font-extrabold tracking-wide text-white">{f.formName}</h1>
      </div>
    </NavLink>
  )
}

export default FormCard;