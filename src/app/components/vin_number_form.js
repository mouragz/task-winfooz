import React from 'react';
import {
    Form, FormGroup,
    FormControl, Col, Button,
    Checkbox, ControlLabel,
    Grid, Row, Radio, InputGroup, Glyphicon, Addon
} from 'react-bootstrap';
import $ from 'jquery';

class VinNumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: 'hide',
        }
    }
    // Function to check letters and numbers  
    validate(inputtxt) {
        var letterNumber = /^[0-9|A-Z]+$/;
        if ((inputtxt.match(letterNumber))) {
            return true;
        } else {
            alert('The VIN Number Invalid, Retry Please');
            return false;
        }
    }
    handleChange(e) {
        const vinNumber = e.target.value;
        let len = vinNumber.length;
        let valid = this.validate(vinNumber);
        if (len == 17 && valid) {
            this.setState({ appear: 'show' });
            this.props.triggerParentUpdate();
            this.props.triggerNumberUpdate(vinNumber);
            $.ajax({
                url: "http://winfoozstaging.winfooz.com/v1/car_options/decode_vin?vin="+vinNumber,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                xhrFields: { withCredentials: true },
                error: function(err){
                    console.log(err);
                },
                success: function(data) {
                    console.log(data);
                }
            }).done(function(data){
                console.log(data);
            });
        }
        if(len == 0) {
            console.log("empty");
            this.setState({ appear: 'hide' });
            this.props.triggerNumberUpdate('');
        }
    }
    render() {
        return (
            <Form horizontal>
                <div className="form-group vinNum">
                    <div className="inner-addon right-addon">
                        <i className={'glyphicon glyphicon-ok ' + this.state.appear}></i>
                        <input type="text" className="form-control"
                            placeholder="VIN Number"
                            onKeyUp={this.handleChange.bind(this)} />
                    </div>
                </div>
                <Grid className={this.state.appear}>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Make</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">Jeep</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Model</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">Wrangler</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid className={this.state.appear}>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Year</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">2015</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Trim</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">LX-T</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid className={this.state.appear}>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Engine</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">Engine</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>No. of Clyinders</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">12</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <Grid className={this.state.appear}>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Body Type</ControlLabel>
                                <FormControl className="subVin" componentClass="select" placeholder="select">
                                    <option className="vinOption" value="select">Van</option>
                                    <option className="vinOption" value="other">...</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup controlId="formControlsSelect">
                                <ControlLabel>Transmission</ControlLabel>
                                <FormGroup className="vinOpt">
                                    <input type="radio" id="test1" name="radio-group" />
                                    <label htmlFor="test1" className="vinRadio">Manual</label>
                                    <input type="radio" id="test2" name="radio-group" />
                                    <label htmlFor="test2" className="vinRadio auto">Automatic</label>
                                </FormGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid >

                <FormGroup className="butn_group">
                    <Col>
                        <button type="submit" className="btn btn-warning cont">Continue</button>
                    </Col>
                </FormGroup>

            </Form>
        );
    }
}

export default VinNumberForm;