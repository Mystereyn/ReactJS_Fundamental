import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import myPhoto from "../image/myPhoto.jpg";

function CardHeader() {
    return (
        <>
            <Card style={{width:'19rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>Hello I am Mystereyn</Card.Title>
                    <Card.Text>
                        I'm Teuku Reynaldi A.K.A Mystereyn in digital,
                        I'm a man 22 years old and I'm a baby programmer,
                        Please click this below to directed to my social Media
                    </Card.Text>
                    <Button variant="primary">
                        Go
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardHeader;
