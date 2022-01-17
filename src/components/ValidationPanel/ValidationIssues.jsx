import { Fragment, useEffect } from "react";
import { Transition } from '@headlessui/react';
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const ValidationIssues = ({ issuesOpen, issues, toggleIssuesOpen }) => {

  return (
    <Fragment>
      <Transition
        show={issuesOpen}
        enter="transition ease-out duration-150"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
        id="validation-issues"
        className="flex flex-col top-0 right-0 absolute bg-neutral-900 w-1/2 h-screen py-4 px-2 shadow-lg z-10"
      >
        <div id="validation-issues" className="border-b-2 mb-4">
          <div className="flex items-bottom mb-4 justify-between">
            <span id="validation-issues" className="text-4xl font-bold">Validation issues</span>
            <button className="self-end" onClick={() => toggleIssuesOpen()}>
              <ArrowNarrowRightIcon className={`h-8 w-8 transform transition-all ${issuesOpen ? 'rotate-0' : 'rotate-180'}`} />
            </button>
          </div>
        </div>
        <div id="validation-issues">
          {issues && Array.isArray(issues) && issues.length > 0 ? (
            <div className="flex flex-col">
              {issues.map((i, key) => {
                return <div className="text-red-500 text-md tracking-wide border border-gray-500 rounded my-2 -mb-1 px-1" key={key}>{i.Message}</div>
              })}
            </div>
          ) : (
            <span id="validation-issues" className="text-md font-semibold text-gray-200">No validation issues found</span>
          )}
        </div>
      </Transition>
    </Fragment>
  )
}

export default ValidationIssues;