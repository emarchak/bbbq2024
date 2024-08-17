import { useState } from "react";

type formState = "submitted" | "error" | "idle" | "loading";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adultsAttending, setAdults] = useState("");
  const [childrenAttending, setChildren] = useState("");
  const [comment, setComment] = useState("");
  const [formStatus, setFormStatus] = useState<formState>("idle");

  const handleSubmit = (event: React.FormEvent) => {
    setFormStatus("loading");
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      email,
      adultsAttending,
      childrenAttending,
      comment,
    });
    setFormStatus("submitted");
    // Add your form submission logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="rounded-md mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Berry Bois"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="berry@sweetstuff.com "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="0"
            value={adultsAttending}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="0"
            value={childrenAttending}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <div className="rounded-md  mt-6 px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
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
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="flex w-full drop-shadow-sm justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            RSVP
          </button>
        </div>
      </form>
    </>
  );
}
