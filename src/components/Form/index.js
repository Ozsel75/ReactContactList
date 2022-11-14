import React from "react";
import { useState, useEffect } from "react";

const initialFormValues = {fullname: "", phone_number: ""};

function Form({addContact, contacts}) {
  
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=>{
    setForm(initialFormValues);
  },[contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit =(e)=> {
    e.preventDefault(); // stop refreshing page

    if(form.fullname === "" || form.phone_number === "" ){
      return false;
    }

    addContact([ ...contacts, form ])
    
  }

  return (
    <form onSubmit={onSubmit}>
      Form
      <div>
        <input name="fullname" placeholder="Full name" value={form.fullname} onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone number" value={form.phone_number} onChange={onChangeInput}/>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
