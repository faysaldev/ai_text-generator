import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isEasyAi = message?.user.name === "EasyAi";
  return (
    <div
      className={`py-5 text-white ${
        isEasyAi && "bg-[#434654] hover:bg-[#4d505a] transition-all ease-in-out"
      }`}
    >
      <div className="flex space-x-5 px-10 max-w-2xl mx-au">
        <img
          src={message?.user.avatar}
          alt=""
          className={`h-14  w-14  ${
            isEasyAi && "w-16 h-16"
          } rounded-md object-contain`}
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
