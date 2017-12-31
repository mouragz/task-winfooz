import React from 'react';
class Draft extends React.Component {
    render() {
        return (
            <div className="card">
                <p className="first_text">
                    <span className="title">Lorem Ipsum</span>
                    <br />
                    Lorem ipsum dolor sit amet,
                adipiscing elit, sed do eiusmod
                incididunt ut labore et dolore maq.
                ris nisi ut aliquip ex ea commodo.
                </p>
                <hr className="draft_hr"/>
                <ul className="list">
                    <li className="draftList">Lorem ipsum dolor sit amet</li>
                    <li className="draftList">Ipsum dolor sit amet</li>
                    <li className="draftList">Dorem ipsum dolor sit amet</li>
                </ul>
            </div>
        );
    }
}

export default Draft;