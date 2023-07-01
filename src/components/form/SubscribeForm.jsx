import { useState } from "react";
import classNames from "classnames";

const SubscribeForm = ({
  title,
  description,
  placeholder,
  bgColor,
  btnColor,
  btnTextColor,
}) => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setSubscribeEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subscribeEmail || !/\S+@\S+\.\S+/.test(subscribeEmail)) {
      setIsValidEmail(false);
      return;
    }
    console.log(subscribeEmail);
    setIsFormSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        "w-full px-4 py-8 md:flex md:justify-center md:items-center md:gap-2 md:px-36",
        bgColor || "bg-gray-400"
      )}
    >
      <div className="text-start md:w-1/3">
        <h1 className="text-lg font-semibold text-white mb-1">{title}</h1>
        <p className="md:w-3/4">{description}</p>
      </div>
      <div className="mt-8 md:mt-4">
        <div className="md:flex md:gap-2">
          <input
            type="text"
            value={subscribeEmail}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-3xl shadow-sm md:w-[484px]"
          />
          <button
            type="submit"
            className={classNames(
              "w-full text-base rounded-3xl py-2 mt-2 md:mt-0 md:w-36",
              btnColor || "bg-black",
              btnTextColor || "text-white"
            )}
          >
            {isFormSubmitted && isValidEmail ? "Subscribed" : "SIGN UP"}
          </button>
        </div>
        <div className="m-2 w-full h-2">
          {!isValidEmail && (
            <p className="text-red-600 text-start ml-4">
              *Please enter a valid email address.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default SubscribeForm;
