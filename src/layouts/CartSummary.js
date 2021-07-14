import React from 'react'
import {Dropdown, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";



export default function CartSummary() {

    const  {cartItems}= useSelector(state=>state.cart)
    return(
        <div>
            <Dropdown icon={'cart'} item text='Sepet' >
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>(
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                {"      "}

                                <Label color={'blue'}>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>

                        ))
                    }


                    <Dropdown.Divider/>
                        <Dropdown.Item as={NavLink} to={'/cart'} >Sepete Git</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}