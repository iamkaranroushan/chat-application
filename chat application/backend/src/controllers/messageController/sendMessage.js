import Message from "../../models/message.js";

const send = async(req, res) => {
  try {
    const { sender, receiver, content } = req.body();
    //now we are gonna put that message to our database
    const newMessage = new Message({
        sender,
        receiver,
        message:content
    });
    const savedMessage = await newMessage.save();
    res.status(200).json({savedMessage})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default send;
