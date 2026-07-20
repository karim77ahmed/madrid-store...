import { useLocation } from "react-router-dom";

function HandleSubmit(e) {
  e.preventDefault();
  const phoneid = e.target.phoneid.value;
  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const type = e.target.type.value;
  const address = e.target.address.value;
  const data = { phoneid, name, phone, type, address };

  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {console.log(result);
    e.target.reset();
    alert("Order Confirmed");
   })
    .catch((err) => {console.log(err);
      alert("Order Failed");
    });
}

export default function BuyNow() {
  const location = useLocation();
  return (
    <div className="form-container">
      <form className="buyForm" onSubmit={HandleSubmit}>
        <h2> BUY NOW</h2>

        <label>name:</label>
        <input type="text" name="name" id="name" required placeholder=" your name" />

        <label>phone number:</label>
        <input type="tel" name="phone" id="phone" required placeholder=" +20 0000000000" />

        <label>phone type :</label>
        <input name="type" id="type" defaultValue={location.state?.phoneName} />

        <label>address:</label>
        <input type="text" name="address" id="address" placeholder=" your address" />

        <input type="hidden" name="phoneid" id="phoneid" defaultValue={location.state?.phoneID} />

        <button type="submit" >Confirm Order </button>
      </form>
    </div>
  );
}

