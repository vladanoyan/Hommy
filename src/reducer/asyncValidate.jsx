const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values) => {
  return sleep(1000).then(() => {
    if (['john@gmail.com', 'paul@gmail.com', 'george@gmail.com'].includes(values.email)) {
      throw { email: 'That email is taken' };
    }
  });
};

export default asyncValidate;
