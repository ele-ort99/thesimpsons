import Card from 'react-bootstrap/Card';
import './cardApp.css'

function CardApp({ cards }){
  return(
    <div  className='container'>
      {cards.map((card, id) => (
      <div>
        <div className='targets'>
          <Card key={id} style={{ width: '18rem' }}>
          <Card.Img className='img' variant="top" src={card.image} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold' }}>{card.name}</Card.Title>
            <Card.Text>
              {card.phrase}
            </Card.Text>
          </Card.Body>
              </Card>
        </div>
      </div>
      ))}
</div>
  )
}

export default CardApp