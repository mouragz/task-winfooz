import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import VinNumberForm from './vin_number_form';
import InformationForm from './information_form';

class Panels extends React.Component {
    constructor() {
        super();
        this.state = {
            flagToggle: false,
            cls1: 'fa fa-2x fa-caret-up',
            cls2: 'fa fa-2x fa-caret-down',
            secondPanel: false,
            firstPanel: true,
            infos: 'infosbefore',
            vinNumber: '',
            headColor: '',
            whiteColor: 'arrow',
            changeFont: '',
            display: 'hide',

        };
    }
    showVinNumber(vinNumber) {
        this.setState({ vinNumber: vinNumber });
        if (vinNumber.length === 0) {
            this.setState({
                flagToggle: true,
                cls1: 'fa fa-2x fa-caret-up',
                cls2: 'fa fa-2x fa-caret-down',
                secondPanel: false,
                firstPanel: true,
                infos: 'infosbefore',
                headColor: 'headColor',
                whiteColor: 'whiteColor',
                vinNumber: '',
                headColor: '',
                whiteColor: 'arrow',
                changeFont: '',
                display: 'hide',
            });
        }
    }
    updateOpen() {
        this.setState({
            cls2: 'fa fa-2x fa-caret-up',
            infos: 'infosafter',
            headColor: 'headColor',
            whiteColor: 'whiteColor',
            display: 'display',
            changeFont: 'changeFont'
        });
    }
    render() {
        return (
            <PanelGroup defaultActiveKey="1" accordion>
                <Panel collapsible
                    expanded={this.state.firstPanel}
                    className={this.state.headColor}
                    header={<div onClick={() => {
                        this.setState({ firstPanel: !this.state.firstPanel });
                        if (this.state.flagToggle) {
                            this.setState({ cls1: 'fa fa-2x fa-caret-down' })
                        } else {
                            this.setState({ cls1: 'fa fa-2x fa-caret-up' })
                        }
                        this.setState({ flagToggle: !this.state.flagToggle });
                    }}> VIN Number  {" "} <span className="displayVinNumber">{this.state.vinNumber}</span>
                        <i className={'glyphicon glyphicon-ok mydot ' + this.state.display} aria-hidden="true"></i>
                        <i className={this.state.cls1 + ' ' + this.state.whiteColor} aria-hidden="true"></i>
                    </div>
                    } eventKey="1">
                    <span className="addNumber">Add VIN Number</span>
                    <VinNumberForm
                        triggerNumberUpdate={this.showVinNumber.bind(this)}
                        triggerParentUpdate={this.updateOpen.bind(this)} />
                </Panel>
                <Panel collapsible
                    expanded={this.state.secondPanel}
                    className={(this.state.infos === "infosafter" ? 'opened' : 'disabled')+' '+this.state.headColor}
                    header={<div onClick={() => {
                        if (this.state.infos === "infosafter")
                        { this.setState({ secondPanel: !this.state.secondPanel }); }
                        if (this.state.flagToggle) {
                            this.setState({ cls2: 'fa fa-2x fa-caret-up' })
                        } else {
                            this.setState({ cls2: 'fa fa-2x fa-caret-down' })
                        }
                        this.setState({ flagToggle: !this.state.flagToggle });
                    }}
                    > <span className={this.state.changeFont}> Informations </span>{" "} <span className={'displayVinNumber ' + this.state.display}>New   145.000km   4x4   …</span>
                        <i className={'glyphicon glyphicon-ok mydot ' + this.state.display} aria-hidden="true"></i>
                        <i className={this.state.cls2 + ' ' + this.state.whiteColor} aria-hidden="true" ></i>
                    </div>} eventKey="2">
                    <InformationForm />
                </Panel>
            </PanelGroup>
        );
    }
}

export default Panels;