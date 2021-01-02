import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {login} from '../../actions/auth'
import {Link,Redirect} from 'react-router-dom';


class Login extends Component{
    state = {
        username:'',
        password:''
    };
    onSubmit=(e)=>{
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.loginHandler(data)
    };
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
     render() {
         console.warn("Login props",this.props.isAuthenticate);
         const {username,password} = this.state;
         
         if (this.props.isAuthenticate){
             return (<Redirect to="/"/>);
         }
         return(
             <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                     <h2 className="text-center">Login</h2>
                     <form action="" onSubmit={this.onSubmit}>
                         <div className="form-group">
                             <label htmlFor="">Username</label>
                             <input type="text" className="form-control" name="username" value={username} onChange={this.onChange} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Password</label>
                             <input type="password" className="form-control" name="password" value={password} onChange={this.onChange}/>
                         </div>
                          <div className="form-group">
                             <button type="submit" className="btn btn-primary">Login</button>
                         </div>
                         <p>
                             You Don't have any account ?<Link to='/register/'>Register</Link>
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

const mapDispatchToProps=(dispatch)=>({
     loginHandler:(data)=>login(data,dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);