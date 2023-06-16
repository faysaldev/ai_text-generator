import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <div className="flex flex-col space-x-10 text-center items-center justify-center">
        <Image
          alt="Image for logo"
          src={
            "https://i.ibb.co/Jn49Jkr/Screenshot-2023-06-10-171245-removebg-preview-1.png"
          }
          className=""
          width={400}
          height={200}
        />
        <h1 className="text-2xl font-bold mb-20 font-mono">
          Start You Query To Click The New Chat Plus Button✌ in Top Left
        </h1>
      </div>
    </div>
  );
}
