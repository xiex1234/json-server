module.exports = () => {
  const data = { userInfo: [] };
  // Create 1000 users
  for (let i = 0; i < 200; i++) {
    data.userInfo.push({ id: i, name: `user${i}` });
  }

  return data;
};
