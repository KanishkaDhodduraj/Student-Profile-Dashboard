function CourseDetails({
  course,
  duration,
  instructor
}) {
  return (
    <div className="card">

      <h2>Course Information</h2>

      <div className="detail">
        <label>Course</label>
        <p>{course}</p>
      </div>

      <div className="detail">
        <label>Duration</label>
        <p>{duration}</p>
      </div>

      <div className="detail">
        <label>Instructor</label>
        <p>{instructor}</p>
      </div>

    </div>
  );
}

export default CourseDetails;