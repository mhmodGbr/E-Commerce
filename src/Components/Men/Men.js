import React, { Fragment, useState } from 'react';
import './Men.css';
import Container from 'react-bootstrap/Container';
import blog1 from '../images/shoes1.jpg'; 
import blog2 from '../images/watch (3).jpg';
import blog3 from '../images/shoes (5).jpg';
import blog4 from '../images/watch (1).jpg';
import blog5 from '../images/watch (3).jpg';
import blog6 from '../images/watch (6).jpg';
import blog7 from '../images/shoes (4).jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Footer from "../Home/Footer/Footer";
import Button from 'react-bootstrap/Button';



const Men = () => {
    return(

        <section className='man'>

        <Container className="Men">

            <Nav className="men-links" id="link">
                
                <a href='#Feature'>Feature</a>
                <a href='#FAQ'>FAQ</a>
                <a href='#Footer'>about</a>
            
            </Nav>

            <div className="Rows">
            <Row>
            <Col>
                <Card className='Card'>
                    <Card.Img variant="top" src={blog6} />
                            <Card.Body>
                        <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>


            <Col xs={6}>
                <Card className='sec-watch'>
                    <Card.Img className='img' variant="top" src={blog5} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

                <Col>
                <Card className='Card'>
                    <Card.Img variant="top" src={blog7} />
                            <Card.Body>
                        <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>


            </Row>
            </div>

    </Container>

    <div className="men-cards">

            <Card style={{ width: '18rem' }} className='third-card-body'>

                        <div className="image-style">
                            <Card.Img variant="top" src={blog1} className='card-img' />

                            <div className="icons">
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                        </div>



                        <Card.Body className="card-body">
                                <Card.Title className="card-title">Shoes</Card.Title>
                                <Card.Text className="image-info">
                                    45.99 $
                                </Card.Text>
                            <Button className="btn" variant="primary">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='Card'>
            <div className="image-style">
                            <Card.Img variant="top" src={blog2} className='card-img' />

                            <div className="icons">
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                        </div>
                        <Card.Body className="card-body">
                                <Card.Title className="card-title">Shoes</Card.Title>
                                <Card.Text className="image-info">
                                    45.99 $
                                </Card.Text>
                                <Button className="btn" variant="primary">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Card className='third-card-body'>
            <div className="image-style">
                            <Card.Img variant="top" src={blog3} className='card-img' />

                            <div className="icons">
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                        </div>
                        <Card.Body className="card-body">
                                <Card.Title className="card-title">Shoes</Card.Title>
                                <Card.Text className="image-info">
                                45.99 $
                                </Card.Text>
                                <Button className="btn" variant="primary">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='Card'>
            <div className="image-style">
                            <Card.Img variant="top" src={blog4} className='card-img' />

                            <div className="icons">
                            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                        </div>
                        <Card.Body className="card-body">
                                <Card.Title className="card-title">Banse shoes</Card.Title>
                                <Card.Text className="image-info">
                                    <p>55.99$</p>
                                    <Button className="btn" variant="primary">Add To Cart</Button>
                                </Card.Text>

                    </Card.Body>
            </Card>

            </div>

                    <div className='FAQ'>
                        <h1>FAQ</h1>
                    </div>

            <div className="men-shadow-container" id="FAQ">


<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>


<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>


<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>


<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>

<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>


<div className="shadow-card">
    <div className="shadow-img">
        <img src={blog1} />
    </div>
    <div className="image-title">
        <h4>Vans Dipped Palm</h4>
        <p>Mono Old <br/>Skool Shoes</p>
    </div>

    <div className="shadow-info">
        <p>55.77 $</p>
    </div>
</div>
</div>




    <Footer />
    </section>
    )
}

export default Men ;
