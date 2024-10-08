import { useState } from "react";
import useEmail from "../useEmail";

type formState = "submitted" | "error" | "idle" | "loading";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adultsAttending, setAdults] = useState("");
  const [childrenAttending, setChildren] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<formState>("idle");
  const { sendEmail } = useEmail();

  const handleSubmit = (event: React.FormEvent) => {
    setFormStatus("loading");
    event.preventDefault();
    console.log("Form submitted:", {
      to_name: name,
      to_email: email,
      adults_attending: adultsAttending,
      children_attending: childrenAttending,
      message,
    });
    const resp = sendEmail({
      to_name: name,
      to_email: email,
      adults_attending: adultsAttending || "0",
      children_attending: childrenAttending || "0",
      message,
    });

    if (resp instanceof Error) {
      setFormStatus("error");
    } else {
      setFormStatus("submitted");
    }
  };

  if (formStatus === "submitted") {
    return (
      <div className="mt-6 text-center text-highlight font-semibold">
        Thanks for RSVPing! We can't wait to see you!
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="Berry Bois"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="berry@sweetstuff.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
          <label
            htmlFor="adults"
            className="block text-xs font-medium text-gray-900"
          >
            Adults attending
          </label>
          <input
            type="number"
            name="adults"
            id="adults"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="0"
            value={adultsAttending}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
          <label
            htmlFor="children"
            className="block text-xs font-medium text-gray-900"
          >
            Children attending
          </label>
          <input
            type="number"
            name="children"
            id="children"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
            placeholder="0"
            value={childrenAttending}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <div className="rounded-md mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-secondary">
          <label
            htmlFor="comment"
            className="block text-xs font-medium text-gray-900"
          >
            Say something nice
          </label>
          <input
            type="textarea"
            name="comment"
            id="comment"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className="flex w-full drop-shadow-sm justify-center rounded-md bg-highlight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-highlight/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight/75 transition"
          >
            RSVP
          </button>
        </div>
      </form>
    </>
  );
}
