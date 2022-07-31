import Form from 'react-bootstrap/Form';

const DistanceAdjust = () => {
  return (
    <div className='container text-primary col-3'>
      <center>
        <Form.Label>Adjust the Search-Distance</Form.Label>
      </center>
      <Form.Range />
      <div className='row justify-content-center'>
        <div className=' text-primary col-8'>0km</div>
        <div className=' text-primary col-2'>1000km</div>
      </div>
    </div>
  );
};

export default DistanceAdjust;
