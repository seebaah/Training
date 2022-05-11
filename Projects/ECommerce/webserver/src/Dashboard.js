


import { useEffect, useState } from "react";

function Dashboard(){
    const [productlist, setProductList] = useState([
        { Id: "1", productname: "aaaaa", rate: "10", tax: "15" },
        { Id: "2", productname: "bbbbb", rate: "20", tax: "15" },
        { Id: "3", productname: "cccc", rate: "30", tax: "15" },
      ]);
      useEffect(() => {}, []);
    return(
    <div>
        <div className="maindiv"><label>user</label></div>
         <div className="side"><label>menu</label></div>
         <nav>
             <li>Home</li>
             <li>Products</li>
             <li>Order</li>
             <li>Logout</li>
         </nav>
         <div className="content">
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