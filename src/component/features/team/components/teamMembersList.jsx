import React from 'react'
import { Link } from 'react-router-dom';

const team = [
  {
    id: 1,
    name: "Jason Price",
    role: "Admin",
    email: "janick_parisian@yahoo.com",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    id: 2,
    name: "Jukkoe Sisao",
    role: "CEO",
    email: "sibyl_koezy@gmail.com",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 3,
    name: "Harriet King",
    role: "CTO",
    email: "nadia_block@hotmail.com",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    id: 4,
    name: "Lenora Benson",
    role: "Lead",
    email: "feil.wallace@kunde.us",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 5,
    name: "Olivia Reese",
    role: "Strategist",
    email: "kemmer.hattie@cremin.us",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    id: 6,
    name: "Bertha Valdez",
    role: "CEO",
    email: "loraine.koleplin@tromp.io",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 7,
    name: "Harriett Payne",
    role: "Digital Marketer",
    email: "nannie_west@estrella.tv",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    id: 8,
    name: "George Bryant",
    role: "Social Media",
    email: "delmer.kling@gmail.com",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    id: 9,
    name: "Lily French",
    role: "Strategist",
    email: "luciienne.herman@hotmail.com",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 10,
    name: "Howard Adkins",
    role: "CEO",
    email: "wiegand.leonor@herman.us",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    id: 11,
    name: "Earl Bowman",
    role: "Digital Marketer",
    email: "wain.o_altnewrth@nicolette.tv",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    id: 12,
    name: "Patrick Padilla",
    role: "Social Media",
    email: "octavia.nienow@gleichner.net",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
  },
];
const TeamMembersList = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">Team</h1>

       <Link to="add_newmember">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Add New Member
        </button>
        </Link>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-2xl p-6 text-center  relative">
            <img
              src={t.img}
              alt={t.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />

            <h2 className="text-lg font-semibold">{t.name}</h2>
            <p className="text-gray-500 text-sm">{t.role}</p>
            <p className="text-gray-400 text-sm mt-1">{t.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembersList;