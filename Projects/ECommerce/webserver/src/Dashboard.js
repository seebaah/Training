
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import{ReactSession} from "react-client-session";
import'./style.css';

function Dashboard(){
    const [sample, setSample]=useState('');
  const [usr, setUsrName]=useState('');
  const navigate=useNavigate();

    // const [productlist, setProductList] = useState([
    //     { Id: "1", productname: "aaaaa", rate: "10", tax: "15" },
    //     { Id: "2", productname: "bbbbb", rate: "20", tax: "15" },
    //     { Id: "3", productname: "cccc", rate: "30", tax: "15" },
    //   ]);
      useEffect(() => {
        if(ReactSession.get("username")==undefined){
            navigate('/')
          }
          setUsrName(ReactSession.get("username"))
      
          setSample('')
          var token=ReactSession.get("token")
          var url = "http://localhost:8000/getproducts";
          var request = { };
          var header ={ Authorization: `Bearer ${token}`};      
          
          axios
            .post(url, request, {headers:header})
            .then((res) => {
              console.log(res.data);
              if (res.data.length > 0) { 
                setProductList(res.data)
              } else { 
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);

return(
    <div>
        <div className="maindiv">
            <div className="header">
                </div><label>user</label>
                </div>
         <div className="bodypart">
             <div className="menu">
                 </div><label>menu</label>
         <nav>
             <li>Home</li>
             <li>Products</li>
             <li>Order</li>
             <li>Logout</li>
         </nav>
         </div>
         <div className="content">
             <h1>Products</h1>
    <table>
    <thead>
        <th>Id</th>
        <th>productname</th>
        <th>rate</th>
        <th>tax</th>
        </thead>
        <tbody>
            {productlist.map((item,index)=>{
                return(
                    <tr>
                        
                        <td>{item.Id}</td>
                        <td>{item.productname}</td>
                        <td>{item.rate}</td>
                        <td>{item.tax}</td>
                    </tr>
                );
            })}
        </tbody>
        </table>
        </div>
    </div>

);

    
    }
export default Dashboard;