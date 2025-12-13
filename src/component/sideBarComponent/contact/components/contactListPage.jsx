import React from 'react'
import { Link } from 'react-router-dom';

const contacts = [
  {
    id: 1,
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

const ContactListPage = () => {
  return (
    <div>
            <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">Contact</h1>

        <Link to="add_newContact">
        <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Add New Contact
        </button>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl shadow p-0 overflow-hidden border "
          >
            <img
              src={c.img}
              alt={c.name}
              className="h-52 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <p className="text-gray-500 text-sm mt-1">{c.email}</p>

              <button className="w-full mt-4 border rounded-lg py-2 flex justify-center items-center gap-2 text-sm hover:bg-gray-100 transition">
                <span>📩</span> Message
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  )
}

export default ContactListPage;