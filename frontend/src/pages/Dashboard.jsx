import React from "react";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState,useEffect } from "react";
import axios from"axios"

export const Dashboard = () => {
    const [bal, setBal] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                authorization: "Bearer " + localStorage.getItem("token")
            }})
            .then(response => {
                setBal(response.data.balance)
            })
    }, [])
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={bal} />
            <Users />
        </div>
    </div>
}