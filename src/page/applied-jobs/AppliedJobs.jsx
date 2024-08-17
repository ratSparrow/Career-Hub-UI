import { getStoredJobApplication } from '../../utility/localstorage';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

AppliedJobs.propTypes = {};

function AppliedJobs() {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(
      //   job => job.id === storedJobIds.includes(job.id)
      // );
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      console.log(jobsApplied);
    }
  }, []);
  return <div>Applied Jobs</div>;
}

export default AppliedJobs;
