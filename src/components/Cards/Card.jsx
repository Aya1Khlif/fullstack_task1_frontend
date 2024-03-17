import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards({img, title , desc , tophead} ) {
  return (
    <div className='container mt-5 ' >
     <div className="">
        <div className="">
        <Card style={{ width: '23rem' }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <span><em>{tophead}</em></span>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
         {desc}
         </Card.Text>
         <Button className='btn btn-danger '> Schedule a Visite</Button>
         </Card.Body>
       </Card>
        </div>
     </div>
    </div>
  )
}
