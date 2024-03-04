import User from "../../models/user.js";
const getUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      res.status(400).json({ message: "user not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default getUser;
