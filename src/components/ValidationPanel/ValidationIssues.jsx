import { Fragment } from "react";

const ValidationIssues = ({ issuesOpen, issues, toggleIssuesOpen }) => {

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default ValidationIssues;