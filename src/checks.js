import React from "react"
import { useNavigate } from "react-router-dom"


const checkSessionData = () => {
    const navigate = useNavigate();


    username = sessionStorage.getItem("user_name")
    email = sessionStorage.getItem("email")
    role = sessionStorage.getItem("role")
    user_id = sessionStorage.getItem("user_id")

    if (username == "" || email == ""  || user_id == "" || role == ""){
        sessionStorage.removeItem("user_name");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("user_id");
    }

    navigate("/login")


}