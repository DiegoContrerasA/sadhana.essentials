const RowButton = ({ isOk, onClick, isLoading }) => {
  return (
    <button disabled={isOk || isLoading} onClick={onClick} className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1  ${isOk ? 'disabled:bg-gray-50 disabled:text-gray-700 disabled:opacity-75' : ''}`}>
      {isLoading ? '...' : isOk ? 'Enviado' : 'Enviar'}
    </button>
  )
}

export default RowButton
