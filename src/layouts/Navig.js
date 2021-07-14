import React, {useState} from 'react'
import CartSummary from "./CartSummary";
import { Container, Menu} from 'semantic-ui-react'
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux";


export default function Navig() {
    const  {cartItems}= useSelector(state=>state.cart)

   const [isAuthenticated, setIdAuthenticated]=  useState(true)
    const history = useHistory()

    function handleSignOut(){
       setIdAuthenticated(false)
        history.push("/")

    }

    function handleSignIn(){
        setIdAuthenticated(true)
    }
    return (
        <div>
            <Menu color={'blue'} inverted fixed={"top"}>
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>
                    <Menu.Menu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}