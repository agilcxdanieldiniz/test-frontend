import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    activeStatus: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5050/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      date: form.date,
      activeStatus: form.activeStatus,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5050/record/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            id="phone"
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="address"
            id="address"
            value={form.address}
            onChange={(e) => updateForm({ address: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="date">Register date: </label>
          <input
            type="date"
            id="date"
            value={form.date}
            disabled
          />
        </div>
        <div>
          <label htmlFor="activeStatus">Profile status: </label>
          <input
            type="text"
            id="activeStatus"
            value={form.activeStatus}
            onChange={(e) => updateForm({ activeStatus: e.target.value })}
            disabled
          />
        </div>
        <div>
          <label htmlFor="activeStatus">Activate: </label>
          <input
            type="radio"
            id="activeStatus"
            name="activeStatus"
            value={true}
            onChange={(e) => updateForm({ activeStatus: e.target.value })}
          />
          <label htmlFor="activeStatus">Inactivate: </label>
          <input
            type="radio"
            id="activeStatus"
            name="activeStatus"
            value={false}
            onChange={(e) => updateForm({ activeStatus: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Record" />
        </div>
      </form>
    </div>
  );
}
