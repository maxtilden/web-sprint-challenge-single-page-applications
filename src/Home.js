import React from 'react';
import {useHistory} from 'react-router-dom';

export default function Home(){
const history = useHistory();

const routeToShop = () => {
    history.push('/pizza');
}
return (
    <button id='order-pizza' onClick = {routeToShop}>Order Pizza</button>

)
}