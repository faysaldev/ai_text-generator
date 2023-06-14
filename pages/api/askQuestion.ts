import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please Provide a Prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please Provide a Valid Chat Id!" });
    return;
  }

  //  todo easyai Query
  const response = await query(prompt, chatId, model);
  const message: Message = {
    text: response || "EasyAi was unable to find an answer for the specified",
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "EasyAi",
      name: "EasyAi",
      avatar: "https://i.ibb.co/mt6rQqk/download-removebg-preview.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
    res.status(200).json({ answer:message.text});
  //  res.status(200).json({ name: 'John Doe' })
}




// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
//   temperature: 0.9,
//   max_tokens: 150,
//   top_p: 1,
//   frequency_penalty: 0.0,
//   presence_penalty: 0.6,
//   stop: [" Human:", " AI:"],
// });