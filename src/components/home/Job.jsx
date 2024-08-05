import PropTypes from 'prop-types';

Job.propTypes = {
  job: PropTypes.object,
};

function Job({ job }) {
  const { logo, job_title } = job;
  return (
    <div>
      <img src={logo} alt="logo" />
      <h2>{job_title}</h2>
    </div>
  );
}

export default Job;
