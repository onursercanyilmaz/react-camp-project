import React from 'react'
import {ErrorMessage, Field, useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

export default function OSTextInput({...props})
{
    const [field,meta] = useField(props)
    return(
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color={"red"} content={meta.error}/>
            ):null}

        </FormField>
    )
}