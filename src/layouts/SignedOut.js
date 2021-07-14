import React from 'react'
import {Button, MenuItem} from "semantic-ui-react";

export default function SignedOut(props) {

    return (
        <div>
            <MenuItem>
                <Button onClick={props.signIn} primary style={{marginRight:'0.5em'}}>Giriş Yap</Button>

                <Button primary>Kayıt Ol</Button>
            </MenuItem>


        </div>
    )
}