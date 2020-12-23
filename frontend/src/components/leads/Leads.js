import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Leads extends Component {
    render() {
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
                    <tr>
                        <td>171-15-1463</td>
                        <td>mdnuraminsifat380@gmail.com</td>
                        <td>Hello, Sifat</td>
                        <td>
                            <button onClick="" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Leads;