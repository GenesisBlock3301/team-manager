import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component{
     render() {
         return(
             <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                     <h2 className="text-center">Register</h2>
                     <form action="">
                         <div className="form-group">
                             <label for="">Username</label>
                             <input type="text" className="form-control" name="username" onChange="" value=""/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Email</label>
                             <input type="email" className="form-control" name="email" onChange="" value=""/>
                         </div>
                         <div className="form-group">
                             <label htmlFor="">Password</label>
                             <input type="password" className="form-control" name="password" onChange="" value=""/>
                         </div>
                          <div className="form-group">
                             <label htmlFor="">Confirm Password</label>
                             <input type="password" className="form-control" name="password2" onChange="" value=""/>
                         </div>
                          <div className="form-group">
                             <button type="submit" className="btn btn-primary">Register</button>
                         </div>
                         <p>
                             Already have an account ?
                         </p>
                     </form>
                 </div>
             </div>
         )
    }
}
export default Register;