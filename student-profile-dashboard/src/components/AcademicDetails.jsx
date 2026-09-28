function AcademicDetails({
  department,
  year,
  semester,
  cgpa
}) {
  return (
    <div className="card">

      <h2>Academic Details</h2>

      <div className="detail">
        <label>Department</label>
        <p>{department}</p>
      </div>

      <div className="detail">
        <label>Year</label>
        <p>{year}</p>
      </div>

      <div className="detail">
        <label>Semester</label>
        <p>{semester}</p>
      </div>

      <div className="detail">
        <label>CGPA</label>
        <p>{cgpa}</p>
      </div>

    </div>
  );
}

export default AcademicDetails;