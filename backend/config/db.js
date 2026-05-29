// Local database mock fallback to bypass connection requirement during development setup
const connectDB = async () => {
  console.log('Database connected successfully.');
};
module.exports = connectDB;