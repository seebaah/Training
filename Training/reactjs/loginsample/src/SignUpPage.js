import{useState} from "react";
import "./style.css";
function JSONMap(){
    const[countrylist,UseCountryList]=useState([{"id":1,countryname:"India"},{"id":2,"countryname":"USA"},{"id":3,"countryname":"Sri Lanka"}]);
    return(
    <div>
        <table>
            <thead>
                <th>ID</th>
                <th>Country</th>
            </thead>
            <tbody>
                {
                    countrylist.map((itm,index=>{
                    
                    
                    }))}
                
            </tbody>
        </table>
    </div>
    )
            }
    
    
export default JSONMap;