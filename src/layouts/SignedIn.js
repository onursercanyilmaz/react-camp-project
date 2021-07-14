import React from 'react'
import {Button, Dropdown, DropdownItem, DropdownMenu, Image, MenuItem} from "semantic-ui-react";

export default function SignedIn(props){

    return(
        <div>
            <MenuItem>
                <Image avatar spaced={'right'} src={"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/onur_sercan_y%C4%B1lmaz.png"}/>
                <Dropdown pointing={"top left"} text={"Onur"} >
                    <DropdownMenu>
                        <DropdownItem text={"Bilgilerim"} icon={"info"}/>
                        <DropdownItem onClick={props.signOut} text={"Çıkış Yap"} icon={"sign-out"}/>
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>



        </div>
    )
}