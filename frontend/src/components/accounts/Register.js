import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {register} from '../../actions/auth'

class Register extends Component {
    state={
        username:'',
        email: '',
        password:'',
        password2:''
    };
    onSubmit = (e)=>{
        // console.warn('OnSubmit',this.state)
        const {username,email,password,password2} = this.state
        if (password !== password2){
            console.log("Invalide password")
        }
        else {
            const newUser = {
                username,
                email,
                password,
            };
            this.props.registerHandler(newUser)
        }
        e.preventDefault()
    }
    onChange = (e)=>{
        // console.warn("Onchange",e.target)
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        console.warn("Registration Props", this.props)
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form action='' onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type="text" className="form-control" onChange={this.onChange} name="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" onChange={this.onChange} name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" className="form-control" name="password2" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <button type="submit"
                                    className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account ?
                        </p>
                    </form>
                </div>
                {/*<button onClick={()=>this.props.registerHandler({data:"action done"})}>Action</button>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticate: state.isAuthenticate
});
const mapDispatchToProps = (dispatch) => ({
    registerHandler: (data)=> register(data,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Register)