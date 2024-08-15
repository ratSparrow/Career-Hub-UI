import { useEffect, useState } from 'react';

import Job from './Job';

FeaturedJobs.propTypes = {};

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-5xl text-center">Featured Jobs</h2>
      <p className="text-center">
        Explore thousands of job oppurtunities with all the information you
        need. Its your future.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {jobs.slice(0, dataLength).map(job => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length && ' hidden'}>
        <button onClick={() => setDataLength()} className="btn btn-primary">
          Show All Jobs
        </button>
      </div>
    </div>
  );
}

export default FeaturedJobs;
