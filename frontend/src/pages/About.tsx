import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';
import Container from '../components/ui/Container';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Lucas Kimeu',
      role: 'Creator - Elkay Cinematics',
      bio: 'With years of experience in visual storytelling, Lucas leads our creative team with a passion for innovative content that drives results. Sh specializes in commercial and editorial photography.',
      imageUrl: "/IMG-20250319-WA0039.jpg"
    },
    {
      name: 'Mark Tom',
      role: 'Software  developer',
      bio: 'Through countless hours of brainstorming, designing, coding, and refining, our team worked hand-in-hand to breathe life into this website, each contribution a reflection of shared passion, skill, and purpose.',
      imageUrl: "/WhatsApp Image 2025-06-09 at 9.53.59 AM.jpeg"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Elkay Cinematics</h1>
            <p className="text-xl text-gray-300">
              We are a team of passionate creatives dedicated to helping brands tell their stories.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by Lucas Kimeu, we are a creative production company on a mission to bring ideas to life through camera lenses. Specializing in film, photography and digital content, every frame captured is curated with passion and purpose. From as basic as social media reels, short films, music videos and branded content, we offer full service and post production services that amplify your vision.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With expertise in creative consulting, graphic design and branding, we turn ideas into captivating visual experiences.
              </p>
              <p className="text-lg text-gray-600">
                We're here to guide you as a brand, creator or artist and empower you to create, connect and thrive.
              </p>
              <p className='text-lg text-gray-600 mb-6'>We are pleased to be of assistance!</p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Creative team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-xl text-gray-600">
              We create strategic high impact visual content through bringing passion, precision and purpose to every frame.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, from concept to delivery. Quality is never compromised.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork. We collaborate closely with our clients and each other.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">
                We're focused on creating content that not only looks great but also achieves your objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on time, every time. You can count on us to meet deadlines without sacrificing quality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The talented individuals behind our creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group w-full max-w-md">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* <section className="py-24 bg-blue-600 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-xl text-blue-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl text-blue-100">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8</div>
              <p className="text-xl text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">800+</div>
              <p className="text-xl text-blue-100">Clients worked with</p>
            </div>
          </div>
        </Container>
      </section> */}
    </div>
  );
};

export default About;

/*
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By</h2>
            <p className="text-xl text-gray-600">
              We're proud to work with these amazing brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-12 w-full flex items-center justify-center">
                <div className="bg-gray-300 h-6 w-32 rounded"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
*/