import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads from "./Leads";

class Form extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Add Lead</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" name="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" name="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Message</label>
                                <input type="text" className="form-control" name="message"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Form;