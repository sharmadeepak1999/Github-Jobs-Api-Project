import React from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchForm = ({ params, onParamChange }) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.description}
                        type="text"
                        name="description"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.location}
                        type="text"
                        name="location"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Check 
                        onChange={onParamChange} 
                        value={params.full_time}
                        name="full_time"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                        className="mb-2"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default SearchForm;