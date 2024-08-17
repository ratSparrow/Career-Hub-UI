import { useEffect, useState } from 'react';

import { getStoredJobApplication } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';

AppliedJobs.propTypes = {};

function AppliedJobs() {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
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
      setAppliedJobs(jobsApplied);
    }
  }, []);
  return (
    <div>
      <h2>Applied Jobs</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>All</a>
          </li>
          <li>
            <a>Remote</a>
          </li>
          <li>
            <a>onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {appliedJobs.map(job => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppliedJobs;
