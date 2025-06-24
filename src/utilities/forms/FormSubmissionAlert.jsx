import React, { useState } from "react"

const FormSubmissionAlert = ({ submissionBackgroundColor, submissionAlert, setSubmissionAlert }) => {
  return (
    <div className={submissionAlert.visibility}>
      <div
        className={`relative m-1 border ${submissionBackgroundColor} bg-opacity-50 p-1 md:mx-auto`}
        role="alert"
      >
        <strong className="font-bold">{submissionAlert.header}</strong>
        <span className="block">{submissionAlert.body}</span>
        <span className="absolute bottom-0 right-0 top-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() =>
              setSubmissionAlert({
                visibility: "hidden",
                header: "",
                body: ""
              })
            }
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default FormSubmissionAlert
