import React from 'react';
import {
    Form, FormGroup,
    FormControl, Col, Button,
    Checkbox, ControlLabel,
    Grid, Row, Radio
} from 'react-bootstrap';
class InformationForm extends React.Component {
    render() {
        return (
            <Form horizontal>
                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Odometr (KMs)</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">145.000</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Condition</ControlLabel>
                                <FormGroup className="vinOpt">
                                    <input type="radio" id="test3" name="radio-group" />
                                    <label htmlFor="test3" className="vinRadio"> New Car</label>
                                    <input type="radio" id="test4" name="radio-group" />
                                    <label htmlFor="test4" className="vinRadio auto">Used Car</label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>No. of Passengers</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Drive Type</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Exterior Color</ControlLabel>
                                <select className="selectpicker">
                                    <option data-icon="fa fa-2x fa-circle">Black</option>
                                    <option data-icon="fa fa-2x fa-circle Orange">Orange</option>
                                </select>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Interior Color</ControlLabel>
                                <select className="selectpicker">
                                    <option data-icon="fa fa-2x fa-circle Brown">Brown</option>
                                    <option data-icon="fa fa-2x fa-circle Blue">Blue</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Interior Type</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Fuel Type</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>No. of Keys</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Odour</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">select</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row className="show-grid">
                        <Col md={12}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
                <FormGroup className="butn_group">
                    <Col>
                        <button type="submit" className="btn btn-warning cont">Continue</button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default InformationForm;