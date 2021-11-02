import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ProductInfoBar from '../components/ProductInfoBar';
import Product from './../components/Product';
import TestCount from './TestCount';

const HomeLayout = () => {
    return (
        <Fragment>
            
            <NavBar />
            <Container style={{"marginTop":"50px" , "marginBottom":"50px"}}>
                <Row>
                    <Col lg={7} md={9}>
                        <Product />
                    </Col>
                    <Col lg={4} md={3}>
                        <ProductInfoBar />
                    </Col>
                    <TestCount/>
                </Row>
            </Container>
        </Fragment>
    );
};

export default HomeLayout;