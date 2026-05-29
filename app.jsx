import { useState } from "react";
import {FaCode, FaCheck, FaShieldAlt, FaExclamationTriangle} from "react-icons/fa";
function getPasswordStrength=(password)=>{
if(!password){
  return{
    label: "",
    emoji: "",
    strength: "0%",
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
  emoji: <FaExcalamationTriangle />,
};
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const special="~!@#$%^&*()_";
};
