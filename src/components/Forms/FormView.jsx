import { useState, Fragment } from 'react';
import { FormCard } from '../Forms';
import { useFetch, endpoints, requestHelper } from '../../utilities';
import { Fetch } from "../Fetch";

const FormView = props => {

  const [status, setStatus] = useState({
    isLoading: false,
    success: '',
    error: ''
  });

  return (
    <Fetch
      fetchOutput={useFetch(endpoints.forms, requestHelper.requestBuilder("GET"))}
      render={({ response, isLoading }) => (
        <Fragment>
          {response && response.data && (
            response.data.length > 0 ? (
              <div className="flex flex-wrap -m-2 mb-2">
                {response.data.map(f => (
                  <FormCard f={f} key={f._id} setStatus={setStatus} />
                ))}
              </div>
            ) : (
              isLoading ? (
                <div>
                  Loading
                </div>
              ) : (
                <div>
                  You don't have any forms added yet
                </div>
              )
            )
          )}
        </Fragment >
      )}
    />
  )
}

export default FormView;