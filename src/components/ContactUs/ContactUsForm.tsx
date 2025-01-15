import "./ContactUs.css";
export default function ContactUsFrom() {
  return (
    <div className="contactUs-formContainer">
      <form action="">
        <div className="contactUs-formContent">
          <label htmlFor="">
            Name <span>*</span>
          </label>
          <div className="contactUs-formItem1">
            <input type="text" name="" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">
            Phone No <span>*</span>
          </label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">
            Email<span>*</span>
          </label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">Enter Your Subject</label>
          <div className="contactUs-formItem2">
            <input type="text" name="" id="" placeholder="" />
          </div>
        </div>
        <div className="contactUs-formContent">
          <label htmlFor="">Message </label>
          <div className="contactUs-formItem2">
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="contactUs-formBtn">
          <button>Book Now</button>
        </div>
      </form>
    </div>
  );
}
