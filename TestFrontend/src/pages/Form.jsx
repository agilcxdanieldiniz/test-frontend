import classes from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <section className={classes.container}>
        <h1>Register form</h1>
        <form className={classes.resgisterForm}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter the name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter the address"
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              placeholder="Enter the phone number"
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              placeholder="Enter the address"
              required
            />
          </label>
          <label>
            Register date:
            <input
              type="date"
              name="date"
              value={new Date().toISOString().substring(0, 10)}
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
      </section>
    </div>
  );
};

export default Form;
