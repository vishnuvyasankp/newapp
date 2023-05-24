import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  var districts=[
      {
        "id": 1,
        "title" : "kasargod",
        "discription" : "Kasaragod is a place where human settlements are from the Great Stone Age. Located in the Chenkal areas in midlands of the district. Pottery, copper, and ancient ironworks provide hints for ancient humans who lived and worship agriculture and nature. Korangar, Malakkudi, Mavilar, Koppalar and Malavattu are the tribes only seen in Kasargod.Tribal people like Velan, Kadaan, Narasanar, Madigar, Bakur, Moger and Pulaiyar are also found in the district as generations of their tribal forefathers . Some places and places of worship show that the Buddhist and Jainism of the Adi Tribes had dominated places of worship.",
        "image" : "./img/ksr.jpeg",
        "link":"https://kasargod.nic.in/"

    },
    {
        "id": 2,
        "title" : "kannur",
        "discription" : "Kannur district derived its name from the location of its headquarters at Kannur town. The old name ‘Cannanore’ is the anglicised form of the Malayalam word Kannur. According to one opinion, ‘Kannur’ is a derivation from Kanathur, an ancient village, the name of which survives even today in one of the wards of Kannur Municipality. ",
        "image" : "./img/knr.jpeg",
        "link":"https://kannur.nic.in/en/"
    },
    {
        "id": 3,
        "title" : "kozhikode",
        "discription" : "Kozhikode District was the capital of the erstwhile kingdom of the mighty Zamorins and once a renowned commercial center. Today Kozhikode is one of the best cities in Kerala. Endowed with lush green countrysides, serene beaches, historic sites, wildlife sanctuaries, rivers, and hills, this city enchants both its inhabitants and its guests. With its unique culture and friendly ambiance, Kozhikode is a wondrous destination for all.",
        "image" : "./img/kzd.jpeg",
        "link":"https://kozhikode.nic.in/"
    },
    {
        "id": 4,
        "title" : "thiruvananthapuram",
        "discription" : "Thiruananthapuram, the jewel in the emerald necklace that Kerala is for the Indian sub-continent, must surely have Parasuramanbeen a “must see” destination for ages, long before National Geographic Traveller classified it as one. Surely long before Sage Parasurama , according to local legend, threw his divine battle axe from Kanyakumari to Gokarnam to west Kerala, God’s own land, from the Varuna the sea god; before the times of Mahabali the democratic and just ruler of this wonderful land who was sent down to the netherworld through deceit.",
        "image" : "./img/tvm.jpeg",
        "link":"https://trivandrum.nic.in/en/"
    },
    {
        "id": 5,
        "title" : "eranakulam",
        "discription" : "Ernakulam bordering the district of Thrissur in the north, Idukki in the East, Alapuzha and Kottayam in the south, Lakshadweep Sea in the west is an amalgam of a hoary heritage and global growth of industry and commerce. For the outside world, Ernakulam is part of Kochi referred to in the history of Kerala as the Queen of Arabian Sea. The densely populated Ernakulam District embodies the achievements of the Kerala State in literacy, industry, trade and commerce.",
        "image" : "./img/era.jpeg",
        "link":"https://ernakulam.nic.in/"
    },
    {
        "id": 6,
        "title" : "thrissur",
        "discription" : "The term Thrissur is the abbreviated anglicized form of the Malayalam word ‘THRISSIVAPERUR’ which means the town of the “SACRED SIVA”. The town is built on an elevated ground, at the apex of which is the famous “VADAKKUMNATHAN” Temple. A place of great antiquity, Thrissur was also known as “VRISHABHADRIPURAM” and “TEN KAILASAM” in ancient days.",
        "image" : "./img/thr.jpeg",
        "link":"https://thrissur.nic.in/en/"
    },
  ]
  return (
    <Container>
      <Row>
        {
            districts.map((district,index)=>{
              return(
        <Col>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={district.image} />
    <Card.Body>
      <Card.Title>{district.title}</Card.Title>
      <Card.Text>
      {district.discription}
      </Card.Text>
      
      <Button ><a style={{color:"white"}}  href={district.link}>Show more</a></Button>
    </Card.Body>
    </Card>
    </Col>
              )
            }
            )
          }
        
      </Row>
    </Container>
    

    
  
  
  );
}

export default App;
