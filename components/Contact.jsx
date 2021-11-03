// import { useEffect }
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css"

export default function Contact() {
  const [state, handleSubmit] = useForm("xleayldg");
  // if (state.succeeded) {
  //   return <p>Thank you for the message!  I will get back to you as soon as possible</p>;
  // }
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactHeader}>Send me a message</div>
      {!state.succeeded && (
        <p className={styles.contactSubheader}>I would love to hear from you. Let's work together!</p>
      )}
      {state.succeeded && (
        <p className={styles.contactSubheader}>
          Thank you for the message! I will get back to you as soon as possible.
        </p>
      )}
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="_subject"
          value="Email from christopheryun.com"
        />
        <div className={styles.contactInfo}>
          <input id="name" type="text" name="name" placeholder="Name" />
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.contactMessage}>
          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          className={styles.contactButton}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
