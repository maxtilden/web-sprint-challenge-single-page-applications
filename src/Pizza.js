import React from 'react';



export default function Pizza (props){
const {values, change, submit, errors} = props;

const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }
const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }
  return (
      <form id = 'pizza-form' >
          <h2>Have Some Pizza</h2>
          <div>{errors.nameInput}</div>
          <label id = 'name-input'>Name 
              <input
                value={values.nameInput}
                onChange={onChange}
                name='nameInput'
                type='text'
              />
          </label>
          <label id = 'size-dropdown'>Size 
              <select
                value={values.size}
                onChange={onChange}
                name='size'
              >
                <option value = ''>Select an Option</option>
                <option value = 'small'>Small</option>
                <option value = 'medium'>Medium</option>
                <option value = 'large'>Large</option>
              </select>
          </label>
          <div className = 'checklist'>
              <h3>Toppings</h3>
              <label>Olives
          <input
            type="checkbox"
            name="olives"
            checked={values.olives}
            onChange={onChange}
          />
        </label>
        <label>Onions
          <input
            type="checkbox"
            name="onions"
            checked={values.onions}
            onChange={onChange}
          />
        </label>
        <label>Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>
        <label>Green Peppers
          <input
            type="checkbox"
            name="greenPeppers"
            checked={values.greenPeppers}
            onChange={onChange}
          />
        </label>
          </div>
        <div className = 'special'>
        <label id = 'special-text'>Special Instructions 
              <input
                value={values.special}
                onChange={onChange}
                name='special'
                type='text'
              />
          </label>
        </div>
        <div>
            <button onClick={onSubmit}>Submit</button>
        </div>
      </form>
  )
}
