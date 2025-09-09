interface Contact {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  result: string;
}
const ContactForm = ({ onSubmit, result }: Contact) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 justify-center items-center w-1/2 flex-1"
    >
      <div className="flex sm:flex-row flex-col gap-3 items-center justify-center">
        <input
          className="border border-border rounded-lg px-3 py-2 bg-input focus:outline-none flex-1"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border border-border rounded-lg px-3 py-2 bg-input focus:outline-none flex-1"
          type="email"
          placeholder="Email Address"
          name="email"
        />
      </div>
      <textarea
        className="resize-none border border-border rounded-lg px-3 py-2 bg-input focus:outline-none w-full min-w-[238px]"
        placeholder="Your Message..."
        name="message"
      ></textarea>

      <button
        type="submit"
        className="px-2.5 py-1.5 rounded-lg bg-primary cursor-pointer "
      >
        Submit
      </button>
      <p className="text-center">{result}</p>
    </form>
  );
};

export default ContactForm;
