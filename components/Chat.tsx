"use client";

import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  chatId: string;
};
const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-auto min-h-[85vh] ChatPage__scrollbar overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">
            Type a prompt in blow to get Started!🔥
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce cursor-pointer" />
        </>
      )}
      {messages?.docs?.map((msg) => (
        <Message key={msg.id} message={msg.data()} />
      ))}
    </div>
  );
};

export default Chat;
