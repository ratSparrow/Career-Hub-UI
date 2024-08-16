import PropTypes from 'prop-types';
import { getStoredJobApplication } from '../../utility/localstorage';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

AppliedJobs.propTypes = {};

function AppliedJobs(props) {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => job.id === storedJobIds);
      return jobsApplied;
    }
  }, []);
  return <div>Applied Jobs</div>;
}

export default AppliedJobs;
