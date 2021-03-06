import { useEffect } from "react";
import { getCourses } from "../../actions/loadCourse";
import { connect } from "react-redux";
import Course from "./Course";
import { useRouteMatch, Route, Switch} from "react-router-dom";
import AddVideo from "./AddVideo";

const Dashboard = ({ getCourses, courses, isLoading }) => {
  let { path } = useRouteMatch();
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return (
    <div className="registered-courses">
      {!isLoading ? (
        courses && courses.length > 0 ? (
          <div>
            
            {courses.map((course) => {
              return <Course key={course.id} data={course} />;
            })}
          </div>
        ) : (
          <p>No courses found</p>
        )
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.getCourses.courses,
  isLoading: state.getCourses.isLoading,
});

export default connect(mapStateToProps, { getCourses })(Dashboard);
