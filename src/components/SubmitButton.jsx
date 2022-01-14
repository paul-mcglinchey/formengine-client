const SubmitButton = ({ title, disabled }) => {
  return (
    <button className="flex self-end px-2 py-1 border-2 border-blue-300 hover:border-green-300 transition-all rounded text-gray-800 font-semibold" type="submit" disabled={disabled}>
      {title}
    </button>
  )
}

export default SubmitButton;