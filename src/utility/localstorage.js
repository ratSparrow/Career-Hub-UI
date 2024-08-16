const getStoredJobApplication = () => {
  const storedJobapplication = localStorage.getItem('job-application');
  if (storedJobapplication) {
    return JSON.parse(storedJobapplication);
  }
};

const saveJobApplication = id => {
  const storedJobapplication = getStoredJobApplication();
  const exists = storedJobapplication.find(jobId => jobId === id);
  if (!exists) {
    storedJobapplication.push(id);
    localStorage.setItem(
      'job-application',
      JSON.stringify(storedJobapplication)
    );
  }
};

export { saveJobApplication, getStoredJobApplication };
