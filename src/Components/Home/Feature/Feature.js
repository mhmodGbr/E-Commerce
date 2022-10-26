import React from "react";
import './Feature.css';
import blog1 from '../../images/shoes1.jpg'; 
import blog2 from '../../images/shoes (3).jpg';
import blog3 from '../../images/shoes (4).jpg';
import blog4 from '../../images/shoes (3).jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';



const Feature = () => {
    return(
        <div className="Feature-container" id="Feature">
            <div className="title">
                <h1>Featured products</h1>
            </div>

            
            <div className="cards">

            <Card style={{ width: '18rem' }}>

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

            <Card style={{ width: '18rem' }}>
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

            <Card style={{ width: '18rem' }} className='Card'>
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

            <Card style={{ width: '18rem' }}>
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

            <div className="carousel">
                <Carousel className="fisrt-slide">
                    <Carousel.Item>
                        <img src={blog1} alt="First slide" />
                        
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    src={blog2}
                    alt="Second slide"
                    />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={blog3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            





                <Carousel className="sec-slide">
                    <Carousel.Item>
                        <img src={blog1} alt="First slide" />
                        
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    src={blog2}
                    alt="Second slide"
                    />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={blog3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="shadow-container" id="products">
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
        </div>
    )
}

export default Feature ;
