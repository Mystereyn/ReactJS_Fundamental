import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
function cardHeader() {
    return (
        <>
            <Card style={{width:'19rem'}}>
                <Card.Img variant="top" src="../image/myPhoto.png"/>
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
export default cardHeader;
