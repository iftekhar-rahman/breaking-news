import React from 'react';
import {Card, Button} from 'react-bootstrap';

const News = (props) => {
    const {title, description} = props.article;
    return (
        <Card>
            <Card.Header as="h5">{title}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>{description} </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>            
    );
};

export default News;
