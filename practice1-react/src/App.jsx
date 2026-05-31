import { useState } from "react";
import {FaCode, FaCheck, FaShieldAlt, FaExclamationTriangle, FaEye, FaEyeSlash} from "react-icons/fa";
import "./App.css";
function App(){
const [data, setData] = useState({
  password: "",
});
const [showPassword, setShowPassword]=useState(false);
function getPasswordStrength(password){
if(!password){
  return{
    label: "",
    emoji: "",
    width: "0%",
    color: "",
  };
}
const hasUpperCase=/[A-Z]/.test(password);
const hasLowerCase=/[a-z]/.test(password);
const hasNumber=/[0-9]/.test(password);
const hasSpecialChar=/[~!@#$%^&*()_]/.test(password);
if(password.length==10 && hasUpperCase &&hasLowerCase && hasNumber && hasSpecialChar){
  return{
    label: "Strong",
    emoji: <FaCheck />,
    color: "Green",
    width: "100%",
  };
}
if((password.length==5 || password.length>5)&& hasUpperCase && hasLowerCase){
  return{
    label: "Medium",
    emoji: <FaShieldAlt />,
    color:"Yellow",
    width: "60%",
  };
}
return{
  label: "Weak",
  color: "Red",
  width: "30%",
  emoji: <FaExclamationTriangle />,
};
};
const generatePassword=()=>{
  const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const special="~!@#$%^&*()_";
const allChars=upper+lower+number+special;
let password=upper[Math.floor(Math.random()*upper.length)]+lower[Math.floor(Math.random()*lower.length)]+number[Math.floor(Math.random()*number.length)]+special[Math.floor(Math.random()*special.length)];
while(password.length<10){
password=password+allChars[Math.floor(Math.random()*allChars.length)];
}
password=password.split("").sort(()=>Math.random()-0.5).join("");
setData({...data,password,});
};
const passwordStrength =
getPasswordStrength(data.password);
return(
  <div className="password">
    <input type={showPassword ? "text" : "password"} maxLength={10} value={data.password}
    onChange={(e)=>setData({...data,password: e.target.value})}
    />
    <button className="eyeBtn" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
    <p className="suggest" onClick={generatePassword}>Suggest Strong Password</p>
    {data.password && (
      <div className="overallstrength">
        <div className="bar">
          <div className="strength"
            style={{width: passwordStrength.width, backgroundColor: passwordStrength.color,}}>
          </div>
          <p className="Text"
          style={{color: passwordStrength.color}}>
          {passwordStrength.emoji}{passwordStrength.label}
          </p>
        </div>
      </div>
    )}
  </div>
);
}
export default App;
