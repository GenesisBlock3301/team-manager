import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {login} from '../../actions/auth'

class Login extends Component{
    state = {
        username:'',
        password:''
    };
    onSubmit=(e)=>{
        e.preventDefault()
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.loginHandler(data)
    };
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
     render() {
         console.warn("Login props",this.props)
         return(
             <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                     <h2 className="text-center">Login</h2>
                     <form action="" onSubmit={this.onSubmit}>
                         <div className="form-group">
                             <label htmlFor="">Username</label>
                             <input type="text" className="form-control" name="username" onChange={this.onChange} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Email</label>
                             <input type="email" className="form-control" name="email" onChange={this.onChange} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Password</label>
                             <input type="password" className="form-control" name="password" onChange={this.onChange}/>
                         </div>
                         
                          <div className="form-group">
                             <button type="submit" className="btn btn-primary">Register</button>
                         </div>
                         <p>
                             You Don't have any account ?
                         </p>
                     </form>
                 </div>
             </div>
         )
    }
}
const mapStateToProps=(state)=>({
    isAuthenticate:state.auth.isAuthenticate
});

const mapDispatchToProps=()=>({
     loginHandler:(data)=>login(data)
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);