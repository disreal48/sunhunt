import Form from 'react-bootstrap/Form';

const TempAdjust = () => {
  return (
   
    <div class="container text-primary">
        <center>
     <Form.Label>Adjust your desired Temperature</Form.Label>     
     </center>
      <Form.Range />
   </div>
  )
}

export default TempAdjust