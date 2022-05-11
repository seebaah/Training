import axios from "axios";

function SignUp(){
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[pin,setPINcode]=useState('');
    const[phone,setPhone]=useState('');
const navigate=useNavigate();
function insert(){
    var req={
        username:username,
        password:password,
        firstname:firstname,
        lastname:lastname,
        pin:pin,
        phone:phone,
    };
    let url="http://localhost:5050/Userfetch";
    const header={};
    axios.post(url,req,header)
    }
}
<div class="container">

            <div class="innerdiv">
                <div class="innerdivh1">
                    <h1>Add an address so you can get paid</h1>
                </div>

                <div class="innerdivh2">
                    <h2>This will be used as your default business address</h2>
                </div>
                <div class="innerdivh3">
                    <h3>You can always change this later.</h3>
                </div>

                <div><label>Country/Region</label>
                    <div><select class="innerdivcoun">
                            <option>India</option>
                            <option>USA</option>
                            <option>Sri Lanka</option>
                        </select> </div>
                </div>
                <div class="form">
                    <div class="formelement"><label>First Name</label>
                        <input type="text" class="fname">
                    </div>
                    <div class="formelement"><label>Last Name</label>
                        <input type="text" class="lname">
                    </div>
                </div>
                <div>
                    <div><label>Address</label>
                        <div class="form2"><input type="text"></div>
                    </div>
                    <div><label>Apartment,Suite etc.</label>
                        <div class="form2"><input type="text"></div>
                    </div>
                </div>
                <div>
                    <div class="box1"><label>City</label>
                        <input type="text">
                    </div>
                    <div class="box2"><label>State</label>
                        <div><select>
                                <option>Karnataka</option>
                                <option>New Jersey</option>
                                <option>Colombo</option>
                            </select></div>
                    </div>
                    <div class="box3"><label>PIN code</label>
                        <input type="text">
                    </div>
                </div>
                <div class="boxs">
                    <div class="box4"><label>Phone</label>
                        <div> <input type="tel" class="tel"></div>
                    </div>
                    <div class="box5"><label> Website(Optional)</label>
                        <div> <input type="text" class="persnl"></div>
                    </div>
                </div>

                <div><input type="checkbox"><label>This store is a registered business</label></div>
                <div>
                    <div class="back"><button>back</button></div>
                    <div class="enter"><button style="background-color:rgb(147, 226, 147)">Enter</button></div>

                </div>

            </div>
        </div>
        export default SignUp;