
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Swapnil Belote",
    // role: "Founder & CEO",
    image: "https://i.postimg.cc/B6LGJJf6/Whats-App-Image-2024-02-14-at-10-54-05-AM-11zon.jpg",
    // remove "https://postimg.cc/delete/Sw8pRJCf/2e6c9cdc"
    bio: "Swapnil has a vast experience in business and technology and founded CollabCraze Tech with a vision to make technology accessible to businesses of all sizes.",
    social: {
      linkedin: "https://www.linkedin.com/in/swapnil-belote-79b878259/",
      twitter: "#",
    },
  },
  {
    name: "Pratik Mohite",
    // role: "CTO",
    image: "https://i.postimg.cc/7ZnHRPqr/pratik-Up-Profile-1-removebg-preview.png",
    // remove : "https://postimg.cc/delete/0Fc51M06/e236a90b"
    bio: "Pratik leads our technical team, bringing his expertise in web development, cloud architecture, and emerging technologies to deliver cutting-edge solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/pratikmohite2512/",
      twitter: "https://x.com/0xPratik010",
    },
  },
  {
    name: "Vishal Mukta",
    // role: "Head of Design",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    bio: "Vishal ensures that all our digital products are not only functional but also bug free and deliver user experiences with intuitive and elegant designs.",
    social: {
      linkedin: "https://www.linkedin.com/in/vishal-mukta-591192204/",
      twitter: "#",
    },
  },
  {
    name: "Yash Gangurde",
    // role: "Client Success Manager",
    image: "https://i.postimg.cc/FsthskRQ/photo-Photoroom.jpg",
    // remove: "https://postimg.cc/delete/bMPqGH6D/65172d92"
    bio: "Yash works closely with our clients to understand their needs and ensure that our solutions exceed their expectations and drive tangible business results.",
    social: {
      linkedin: "https://www.linkedin.com/in/yash-gangurde-ab4b78264/",
      twitter: "#",
    },
  },
];

export function TeamSection() {
  return (
    <section className="bg-tech-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-tech-gray-600">
            Our talented team of professionals is dedicated to creating exceptional technology solutions that help businesses thrive.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="card-hover frost-bg overflow-hidden rounded-xl border border-white/50 p-6 shadow-sm backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div> */}
              <h3 className="mt-4 text-xl font-semibold text-tech-gray-900">
                {member.name}
              </h3>
              <p className="text-tech-blue-600">{member.role}</p>
              <p className="mt-2 text-sm text-tech-gray-600">{member.bio}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={member.social.linkedin}
                  className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-tech-gray-400 transition-colors hover:text-tech-blue-600"
                  aria-label={`${member.name}'s Twitter profile`}
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
