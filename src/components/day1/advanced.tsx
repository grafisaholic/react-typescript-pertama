type PropsStatus = {
  status: 'loading' | 'success' | 'error' // initial static status props
}

function Advanced(props: PropsStatus) {
  let message = "";
  switch (props.status) {
    case 'loading':
      message = 'Loading ...'
      break;
    case 'success':
      message = 'Data fetching success !';
      break;
    case 'error':
      message = 'Error fetching data !'
      break;
    default:
      message = 'Status not found !'
      break;
  }
  
  return (
    <div className="mt-10">
      <h1 className="text-2xl w-full mb-4 font-bold underline underline-offset-1">Advanced Props</h1>

      <ul className="list-disc">
        <li>Status Message : {message}</li>
      </ul>
    </div>
  )
}

export default Advanced