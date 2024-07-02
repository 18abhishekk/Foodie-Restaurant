const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page:</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter Message"
        />
        <button className="border border-black p-2 m-2 bg-gray rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;