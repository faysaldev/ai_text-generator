import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20 font-mono">EasyAi</h1>

      <div className="flex space-x-3 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2>Examples</h2>
          </div>
          {/* text */}
          <div className="space-y-2">
            <p className="infoText">{"'Explain Somethiing to me'"}</p>
            <p className="infoText">
              {"'What is the difference between a dog and a cat?'"}
            </p>
            <p className="infoText">{"'What is the color of the sun?'"}</p>
          </div>
        </div>

        {/* second one  */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2>Capabilities</h2>
          </div>

          {/* text */}
          <div className="space-y-2">
            <p className="infoText">{"'Change the EasyAI Model to use'"}</p>
            <p className="infoText">{"'Messages are stored in Firebase '"}</p>
            <p className="infoText">
              {"'Hot Toast notification when EasyAi is Thinking'"}
            </p>
          </div>
        </div>

        {/* thired one  */}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />

            <h2>Limitations</h2>
          </div>
          {/* text */}
          <div className="space-y-2">
            <p className="infoText">
              {"'May occasionlly generate incorrect information'"}
            </p>
            <p className="infoText">
              {
                "'May occasionlly produce harmful instruction or biased content'"
              }
            </p>
            <p className="infoText">
              {"'Limited knoledge of world and events after 2021'"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
