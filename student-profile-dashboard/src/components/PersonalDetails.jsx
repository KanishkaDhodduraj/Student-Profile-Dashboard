function PersonalDetails({ name, registerNo, email, phone }) {
  return (
    <div className="card">

      <h2>Personal Details</h2>

      <div className="detail">
        <label>Name</label>
        <p>{name}</p>
      </div>

      <div className="detail">
        <label>Register Number</label>
        <p>{registerNo}</p>
      </div>

      <div className="detail">
        <label>Email</label>
        <p>{email}</p>
      </div>

      <div className="detail">
        <label>Phone</label>
        <p>{phone}</p>
      </div>

    </div>
  );
}

export default PersonalDetails;