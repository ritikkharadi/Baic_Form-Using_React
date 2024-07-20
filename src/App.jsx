import { useState } from "react";
import "./App.css";

function App() {
  const [formdata, SetFormData] = useState({
    firstname: "",
    lastname: "",
    gmail: "",
    comments: "true ",
    candidate: "true ",
    offer: "true ",
    mode: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    SetFormData((previousdata) => ({
      ...previousdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
  }

  return (
    <div className="flex justify-center p-4">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstname">
          First Name
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md"
          type="text"
          placeholder="eg.John"
          onChange={changeHandler}
          name="firstname"
          value={formdata.firstname}
        />

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastname">
          Last Name
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md"
          type="text"
          placeholder="eg.Snow"
          onChange={changeHandler}
          name="lastname"
          value={formdata.lastname}
        />

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="gmail">
          Email Address
        </label>
        <input
          className="w-full px-3 py-2 mb-4 border rounded-md"
          type="email"
          placeholder="eg.xxx@gmail.com"
          onChange={changeHandler}
          name="gmail"
          value={formdata.gmail}
        />

        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="country">
          Country
        </label>
        <select
          className="w-full px-3 py-2 mb-4 border rounded-md"
          name="country"
          value={formdata.country}
          onChange={changeHandler}
        >
          <option value="ind">India</option>
          <option value="un">United States</option>
          <option value="uk">United Nations</option>
        </select>

        {/* Add other form fields as needed... */}
        <br />
    <br />
    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="street">Street Adress</label><br />
    <input type="text" placeholder="eg. street 1 winterfell" onChange={changeHandler} name="street" value={formdata.street} className="w-full px-3 py-2 mb-4 border rounded-md"/>
   <br />
   <br />

   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="city">Last Name</label><br />
    <input type="text" placeholder="eg.Mumbai" onChange={changeHandler} name="city" value={formdata.city} className="w-full px-3 py-2 mb-4 border rounded-md"/>
   <br />
   <br />
   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lstate">State</label><br />
    <input type="text" placeholder="eg.Maharastra" onChange={changeHandler} name="state" value={formdata.state} className="w-full px-3 py-2 mb-4 border rounded-md"/>
   <br />
   <br />
   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="zip">Zip/Pin Code</label><br />
    <input type="text" placeholder="eg.313802" onChange={changeHandler} name="zip" value={formdata.zip} className="w-full px-3 py-2 mb-4 border rounded-md"/>
   <br />
   <br />
   <p>ByEmail</p> <br /> 

        <div className="mb-4">
          <input type="checkbox" name="comments" value={formdata.comments} onChange={changeHandler} />
          <label className="ml-2 text-sm" htmlFor="comments">
            Comments
          </label>
          <p className="text-sm">Get notified when someone comments on posting</p>
        </div>

        <div className="mb-4">
          <input type="checkbox" name="candidate" value={formdata.candidate} onChange={changeHandler} />
          <label className="ml-2 text-sm" htmlFor="candidate">
            Candidate
          </label>
          <p className="text-sm text-gray-400">Get notified when a candidate applies for a job</p>
        </div>

        <div className="mb-4">
          <input type="checkbox" name="offer" value={formdata.offer} onChange={changeHandler} />
          <label className="ml-2 text-sm" htmlFor="offer">
            Offers
          </label>
          <p className="text-sm text-gray-400">Get notified when a candidate applies or rejects an offer</p>
        </div>

        <p className="mb-4 text-sm text-gray-400">Push Notification</p>

        <div className="mb-4">
          <input type="radio" name="mode" onChange={changeHandler} value="onlinemode" checked={formdata.mode === "onlinemode"} />
          <label className="ml-2 text-sm" htmlFor="mode">
            Everything
          </label>
        </div>

        <div className="mb-4">
          <input type="radio" name="mode" onChange={changeHandler} value="offlinemode" checked={formdata.mode === "offlinemode"} />
          <label className="ml-2 text-sm" htmlFor="mode">
            Same as email
          </label>
        </div>

        <div className="mb-4">
          <input type="radio" name="mode" onChange={changeHandler} value="hybridmode" checked={formdata.mode === "hybridmode"} />
          <label className="ml-2 text-sm" htmlFor="mode">
            Do not push
          </label>
        </div>

        <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
