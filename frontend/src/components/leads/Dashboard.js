import React,{Component,Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads from "./Leads";
import Form from "./Form";

class Dashboard extends Component{
     render() {
         return(
             <Fragment>
                 <Form/>
                 <Leads/>
             </Fragment>
         )
    }
}
export default Dashboard;