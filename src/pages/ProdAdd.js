import React from 'react'
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as  Yup from "yup";
import {Button, FormField, Label} from "semantic-ui-react";
import OSTextInput from "../utilities/customFormControls/OSTextInput";

export default function ProductAdd()
{

    const initialValues = {productName:"", unitPrice:10}
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")

    })
    return(
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
            <Form className={'ui form'}>
                <OSTextInput  name={"productName"} placeholder={"Ürün Adı"}/>
                <OSTextInput  name={"unitPrice"} placeholder={"Ürün Fiyatı"}/>
                { /*<FormField>
                   <Field align={'center'} name={"productName"} placeholder={"Ürün Adı"}></Field>
                    <ErrorMessage name={"productName"} render={error=>
                        <Label pointing basic color={"red"} content={error}></Label>
                    }></ErrorMessage>
                </FormField>
                <FormField>
                    <Field name={"unitPrice"} placeholder={"Ürün Adı"}></Field>
                    <ErrorMessage name={"unitPrice"} render={error=>
                        <Label pointing basic color={"red"} content={error}></Label>
                    }></ErrorMessage>
                </FormField>*/}


                <Button color={"blue"} type={"submit"} >Ekle</Button>


            </Form>
            </Formik>
        </div>
    )
}