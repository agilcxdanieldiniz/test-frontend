import classes from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    activeStatus: true,
  });

  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit() {
    const newPerson = { ...form };

    await fetch("http://localhost:5050/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setForm({ name: "", email: "", phone: "", address: "" });
    navigate("/");
  }

  return (
    <div>
      <section className={classes.container}>
        <h1>Register form</h1>
        <form className={classes.resgisterForm} onSubmit={onSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter the name"
              onChange={(e) => updateForm({ name: e.target.value })}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter the address"
              onChange={(e) => updateForm({ email: e.target.value })}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter the phone number"
              onChange={(e) => updateForm({ phone: e.target.value })}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter the address"
              onChange={(e) => updateForm({ address: e.target.value })}
              required
            />
          </label>
          <label>
            Register date:
            <input
              type="date"
              name="date"
              id="date"
              value={new Date().toISOString().substring(0, 10)}
              onChange={(e) => updateForm({ date: e.target.value })}
              disabled
            />
          </label>
          <input
            type="submit"
            name="register"
            value="Register"
            className={classes.btnRegister}
          />
        </form>
        <Link to={`/list`} style={{ textDecoration: 'none' }}>
          <button className={classes.btnList}>List of entries</button>
        </Link>
      </section>
    </div>
  );
};

export default Form;
