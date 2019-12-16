import React from 'react';
import './Recordgrid.css';
import { mapStateToProps, mapDispatchToProps } from "../../actions/Loancalculation"
import { connect } from "react-redux"
class Showgrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: []
        }
    }

    componentDidMount() {
        this.setState({ output: this.props.output })
    }

    componentDidUpdate(preProps) {
        if (preProps.output !== this.props.output) {
            this.setState({ output: this.props.output })
        }
    }

    render() {
        return <tbody id="out_put">
            {
                this.state.output.length > 0 ? this.state.output.map(item => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.pmt}</td>
                        <td>{item.ppmt}</td>
                        <td>{item.ci}</td>
                        <td>{item.ba}</td>
                    </tr>
                }) : <tr>
                        <th colSpan="5">loading</th>
                    </tr>
            }
        </tbody>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Showgrid);
/*
<tr><th scope=\"row\">" + (i + 1) + "</th><td>" + pmt + "</td><td>" + ppmt.toFixed(2) + "</td><td>" + parseFloat(ci).toFixed(2) + "</td><td>" + ba.toFixed(2) + "</td></tr>
*/