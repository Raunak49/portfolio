import { Box } from "@/components/ui/moving-border";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Box
        borderRadius="1rem"
        className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
        containerClassName="m-auto w-[750px] max-w-[90%] h-auto md:mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Get in touch with Me</h1>
        <div className="mt-10 text-lg">
          <ul>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <AiOutlineMail size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:raunakkakkar899@gmail.com"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  raunakkakkar899@gmail.com
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaTwitter size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Twitter:</span>{" "}
                <a
                  href="https://x.com/Raunak_10_"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @Raunak_10_
                </a>
              </div>
            </li>
            
            <li className="mt-6 flex items-center gap-3">
              <div>
                <ImLocation size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Address:</span> premanagar, Dehradun 248007, India
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default Contact;
