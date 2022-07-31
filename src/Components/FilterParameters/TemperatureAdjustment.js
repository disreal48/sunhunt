import Form from 'react-bootstrap/Form';

const TempAdjust = () => {
  return (
   
    <div className="container text-primary col-3">
      
        <center>
     <Form.Label>Adjust your desired Temperature</Form.Label>     
     </center>
      <Form.Range />
      <div className='row justify-content-center'>
      <div className=" text-primary col-8 justify-content-left">
      -20°
      </div>
      <div className=" text-primary col-2">
        50°
      </div>
   </div>
   </div>
  )
}

export default TempAdjust