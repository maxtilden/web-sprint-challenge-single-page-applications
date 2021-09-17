import React, {useState} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';
import Home from './Home';
import Pizza from './Pizza';


const initialFormValues = {
  nameInput:'',
  size:'',
  olives:false,
  onions:false,
  mushrooms:false,
  greenPeppers:false,
  special:'',
}
const initialFormErrors = {
  nameInput:'',
}
const App = () => {
  
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  
  const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]:value
    })
  }
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(resp => {
        console.log(resp.data);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.log(err);
        setFormValues(initialFormValues);
      })
  }
  const formSubmit = () => {
    const newOrder = {
      nameInput: formValues.nameInput.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['olives', 'onions', 'mushrooms', 'greenPeppers'].filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }
  
  
  
  return (
    <div>
      <h1>Lambda Eats</h1>
      <div>
      <Link to='/'>Home</Link>
      </div>
      <div>
      <Link to='/pizza'>Order Pizza</Link>
      </div>
      <Switch>
        <Route path = '/pizza'>
          <Pizza
          values = {formValues}
          change = {inputChange}
          submit = {formSubmit}
          errors = {formErrors}
          />
        </Route>
        <Route path = '/'>
          <Home />
        </Route>

      </Switch>
    </div>
  );
};
export default App;
