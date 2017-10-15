const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  const error = { email: 'That email is taken' };
  return sleep(1000).then(() => {
    if (['john@gmail.com', 'paul@gmail.com', 'george@gmail.com'].includes(values.email)) {
      throw error;
    }
  });
};

export default asyncValidate;
