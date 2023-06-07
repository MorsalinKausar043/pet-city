import PrivateRoute from "../utils/privateRoute/privateRoute";
import JobPost from "../components/postjob/jobPost";
const page = () => {
  return (
    <>
      <PrivateRoute>
        <JobPost />
      </PrivateRoute>
    </>
  );
};

export default page;
