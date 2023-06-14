"use client";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

const Sidebar = () => {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createAt", "asc")
      )
  );

  return (
    <div className="p-2 h-screen flex flex-col">
      <div className="flex-1">
        <div>
          <NewChat />

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {/* profile image */}
      {session && (
        <img
          src={session?.user?.image!}
          onClick={() => signOut()}
          alt="profile_pic"
          className="h-12 w-12 rounded-full cursor-pointer mb-2 mx-auto
      hover:opacity-50"
        />
      )}
    </div>
  );
};

export default Sidebar;
