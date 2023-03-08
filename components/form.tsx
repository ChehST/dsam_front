import { useState } from "react"

function FeedbackForm() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    
        const data = { name, phone_number: phoneNumber };
    
        fetch("http://localhost:8000/api_fdsam/feedback/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };


  return (
    <div className="md:h-80 md:w-5/12 w-full flex justify-center shadow-xl rounded-xl border bg-white">
        <form onSubmit={handleSubmit} className="mb-0 h-3/4 md:mt-12 mt-6 space-y-6" action="#" method="POST">
            <div className="mx-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-800">Имя:</label>
                <div className="mt-1">
                    <input id="name" name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} className="w-full mb-3 border border-gray-500 px-3 py-2 rounded-lg shadow-sm"/>
                </div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Номер телефона:</label>
                <div className="mt-1">
                    <input id="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} name="tel" autoComplete="tel" type="tel" className="mb-3 w-full border border-gray-500 px-3 py-2 rounded-lg shadow-sm"/>
                </div>
                <div className="mt-1 pb-6">
                    <button type="submit" className="w-full bg-orange-400 text-white hover:shadow-lg px-3 py-2 rounded-lg shadow-sm">Оставить заявку</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FeedbackForm