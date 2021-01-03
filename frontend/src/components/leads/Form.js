import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads from "./Leads";
import {addLead} from '../../actions/leads'
import {connect} from 'react-redux'


class Form extends Component {
    state = {
      name:'',
      email:'',
      message:''  
    };
    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    onSubmit = (e)=>{
      e.preventDefault()
      const {name,email,message} = this.state;
      const lead = {name:name,email:email,message:message}
      this.props.addLead(lead)
        this.setState({
            name:'',
            email:'',
            message:''
        })
        
    };
    render() {
        console.log("Lead form props",this.props)
        const {name,email,message} = this.state;
        return (
            <Fragment>
                <div className="col-md-6 m-auto">
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Add Lead</h2>
                        <form action="" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" name="email" value={email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Message</label>
                                <input type="text" className="form-control" name="message" value={message} onChange={this.onChange}/>
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
export default connect(null,{addLead})(Form);