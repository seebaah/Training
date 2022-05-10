import axios from "axios";

function APITest(){
    function handleClick(){
        const url="http://localhost:5050/addition";
        axios.post(url).then((res)=>{

            console.log(res.data);
        });
        
    }
    return(
        <div>
            
            <button onClick={handleClick}>TEST</button>
        </div>
    );
}
export default APITest;