import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {getLeads,deleteLead} from '../../actions/leads'


class Leads extends Component {
    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        console.warn("Get Leads", this.props.leads)
        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.leads.map((lead) => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td>
                                <button onClick={()=>this.props.deleteLead(lead.id)} className="btn btn-danger">
                                    {' '}
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    leads: state.leads.leads
});
export default connect(mapStateToProps, {getLeads,deleteLead})(Leads);