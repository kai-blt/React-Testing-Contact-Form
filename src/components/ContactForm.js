import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name*
            <input
              name="firstName"
              placeholder="Edd"
              ref={register({ required: true, maxLength: 3 })}
            />
          </label>
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label>Last Name*
            <input
              name="lastName"
              placeholder="Burke"
              ref={register({ required: true })}
            />
          </label>
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label>Email*         
            <input
              name="email"
              placeholder="bluebill1049@hotmail.com"
              ref={register({ required: true })}            
            />
           </label>
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>

        <div>
          <label>Message
            <textarea name="message" ref={register({ required: false })} />
          </label>
        </div>

        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
