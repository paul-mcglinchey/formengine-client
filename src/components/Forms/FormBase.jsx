import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useParams
} from 'react-router-dom';

import { DynamicForm } from './';
import formSchema from '../../validationSchema/formSchema';
import { Fetch } from '../Fetch';
import { endpoints, requestHelper, useFetch } from '../../utilities';
import { Fragment } from 'react/cjs/react.production.min';

const FormBase = props => {

  const { id } = useParams();

  return (
    <Fetch
      fetchOutput={useFetch(`${endpoints.forms}/${id}`, requestHelper.requestBuilder("GET"))}
      render={({ response, isLoading }) => (
        <Fragment>
          {response && response.data && (
            <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 px-4">
              <div className="flex flex-col space-y-4 w-full md:w-1/2">
                <div className="flex space-x-4">
                  {response.data.sections.map((s, i) => (
                    <NavLink className="font-semibold hover:text-gray-500 hover:bg-gray-800 active:text-gray-500 bg-gray-200 px-2 rounded py-1" key={i} to={`${s.sectionName}`}>{s.sectionName}</NavLink>
                  ))}
                </div>
                <Routes>
                  {response.data.sections.map((s, i) => (
                    <Route path={`${s.sectionName}`} key={i} element={<DynamicForm key={i} formSchema={s.fields} />} />
                  ))}
                </Routes>
              </div>
            </div>
          )}
        </Fragment>
      )}
    />
  )
}

export default FormBase;