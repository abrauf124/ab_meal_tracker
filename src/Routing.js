import React from 'react';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { HomePage } from './home';
import { AddIngredientPage } from './ingredients';
import { RecipeSearchPage } from './recipes';
import { ShoppingListPage } from './shopping-list';




const routes=[{
    path:'/',
    Component: HomePage,
    exact: true,
},{
    path: '/add-ingredient',
    Component: AddIngredientPage,
},{
    path: '/recipes',
    Component: RecipeSearchPage,
},{
    path: '/shopping-list',
    Component: ShoppingListPage,
}];

export const Routing = () => {
    return (
        <Router>
            <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    element={ <route.Component />}
                />   
            ))}
            </Routes>
        </Router>
    );
}