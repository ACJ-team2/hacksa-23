import "./calandar.css";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Calendar() {
    const [show, setShow] = useState(true);
    return (
        <div className="calendar">
            <Alert className="assignments" show={show} variant="success">
                <Alert.Heading>Assignments</Alert.Heading>
                <hr />
                <Form className="form">


                    <Form.Check
                        type='checkbox'
                        id={`default-checkbox`}
                        label={`Computer Org Quiz 6`}
                    />

                    <Form.Check
                        type='checkbox'
                        id={`default-checkbox`}
                        label={`UML assignment`}
                    />


                </Form>
                <div className="d-flex justify-content-end">
                    <Button className="add-btn" variant="outline-success">+</Button>
                </div>

            </Alert>

        </div>
    );
}

export default Calendar;
