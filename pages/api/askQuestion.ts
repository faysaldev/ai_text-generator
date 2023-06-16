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

  if(prompt =='who created you'|| 'who made you'|| 'who create you'|| 'who is your creator'|| 'your creator name'){
      const response = await query(prompt, chatId, model);
  const message: Message = {
    text: 'Faysal Mridha, Mohibbullah, Rupom create That Site. These three are studying 5th semester of computer science department at Barisal Polytechnic Institute',
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "EasyAi",
      name: "EasyAi",
      avatar: "https://i.ibb.co/Jn49Jkr/Screenshot-2023-06-10-171245-removebg-preview-1.png",
    },


  };

    // add to the data base
      await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
    res.status(200).json({ answer:message.text});





  }else{
  //  todo easyai Query

      const response = await query(prompt, chatId, model);
  const message: Message = {
    text: response || "EasyAi was unable to find an answer for the specified",
    createAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "EasyAi",
      name: "EasyAi",
      avatar: "https://i.ibb.co/Jn49Jkr/Screenshot-2023-06-10-171245-removebg-preview-1.png",
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

  }

  //  todo easyai Query
  // const response = await query(prompt, chatId, model);
  // const message: Message = {
  //   text: response || "EasyAi was unable to find an answer for the specified",
  //   createAt: admin.firestore.Timestamp.now(),
  //   user: {
  //     _id: "EasyAi",
  //     name: "EasyAi",
  //     avatar: "https://i.ibb.co/Jn49Jkr/Screenshot-2023-06-10-171245-removebg-preview-1.png",
  //   },
  // };



  // await adminDb
  //   .collection("users")
  //   .doc(session?.user?.email)
  //   .collection("chats")
  //   .doc(chatId)
  //   .collection("messages")
  //   .add(message);
  //   res.status(200).json({ answer:message.text});
  //  res.status(200).json({ name: 'John Doe' })
}