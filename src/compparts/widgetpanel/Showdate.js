import React from 'react';
import './Widgetpanel.css';

class Showdate extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return <div>
            <h2>Payment Started on</h2>
            <h3 id="showdate"></h3>
        </div>;
    }
}
export default Showdate;
