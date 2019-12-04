import React from 'react';
import './Mainframe.css';
import Formpanel from '../formpanel/Formpanel';
import Widgetpanel from '../widgetpanel/Widgetpanel';
import Recordgrid from '../recordgrid/Recordgrid';

class Mainframe extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return <div className="container">
            <div className="container-fluid">
                <div className="title-wrap text-sm-center pt-3 pb-3">
                    <h2>Loan Repayment Calculator</h2>
                </div>
                <div className="row">
                    <Formpanel />
                    <Widgetpanel />
                </div>
            </div>
            <div>
                <Recordgrid />
            </div>
            <div>
            </div>
        </div>;
    }
}
export default Mainframe;