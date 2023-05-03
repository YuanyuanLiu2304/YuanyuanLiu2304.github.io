import "./studentInfoSys.css";
import add_stu_record from "../../assets/add_stu_record.png";
import view_record from "../../assets/view_record.png";
import update_record from "../../assets/update_record.png";
import delete_record from "../../assets/delete_record.png";
import s_info_sys from "../../assets/s_info_sys.png";

export function StudentInfoSysDemo() {
  return (
    <div className="student_info_demo">
      <div className="title_container bg-secondary ">
        <h1>Student Information System</h1>
        <p>
          Web Application &nbsp; | &nbsp; HTML &nbsp; CSS &nbsp; PHP &nbsp;
          MySQL
        </p>
        <div className="alert alert-primary mt-5 fs-5">
          This project involved designing and implementing a user-friendly
          interface and server-side functionality using HTML, CSS, and PHP. It
          also included integrating a MySQL database to enable adding, updating,
          viewing, and deleting student information.
        </div>
      </div>

      <div className="demo_container">
        <div className="tag">
          <span>Screenshots</span>
        </div>
        <div className="container-fluid demo_bg">
          <div className="row">
            <div className="col-12">
              <img
                src={s_info_sys}
                alt="Student Information System home page"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src={view_record}
                style={{ height: "85%" }}
                alt="view record"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={add_stu_record} alt="add record"></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={delete_record} alt="delete record"></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={update_record} alt="update record"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
