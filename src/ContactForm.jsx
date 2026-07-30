import useForm from "./useForm";

const ContactForm = () => {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:");
    console.log(values);

    resetForm();
  };

  return (
    <div>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>


        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

       

        <div>
          <label>Message:</label>
          <br />
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Write your message"
          />
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm; 