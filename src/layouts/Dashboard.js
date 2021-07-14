import React  from 'react'
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import {Grid, GridColumn, GridRow} from 'semantic-ui-react'
import {Route} from "react-router-dom"
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify";
import ProductAdd from "../pages/ProdAdd";


export default function Dashboard() {
    return (
        <div>
            <ToastContainer  position={"bottom-right"}  />
            <Grid >
                <GridRow >

                    <GridColumn width={4}>
                        <Categories/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path={'/'} component={ProductList}/>
                        <Route exact path={'/products'} component={ProductList}/>
                        <Route path={'/products/:id'} component={ProductDetail}/>
                        <Route path={'/cart'} component={CartDetail}/>
                        <Route path={'/product/add'} component={ProductAdd}/>
                    </GridColumn>
                </GridRow>
            </Grid>


        </div>
    )
}