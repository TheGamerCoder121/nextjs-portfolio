// components/Profile.js
import React from 'react';
import { Code, Monitor, Edit, Brush, Cpu, Users, Gamepad, PlayCircle } from 'lucide-react';

const Profile = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="/path/to/your/image.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-3xl font-extrabold mb-2">Nicklaus Vega</h2>
        <p className="text-xl text-gray-400 mb-6">Computer Science Student</p>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-300 mb-4">
            Meet Nicklaus, a 17-year-old computer science student with over 5 years of experience in the field. With a strong academic background in computer science and machine learning, Nicklaus brings a wealth of technical skills to any project. As an entrepreneur and team player, Nicklaus excels in both individual and group settings, always eager to connect with others and learn new things.
          </p>
          <p className="text-gray-300 mb-4">
            Nicklaus has experience with frontend and backend development and a passion for diving into computer science topics. With a broad knowledge of programming languages such as LUA, Python, Javascript, and C#, Nicklaus can bring a unique perspective to any project. Additionally, Nicklaus has experience in video editing and graphic design, adding a creative touch to any task.
          </p>
          <p className="text-gray-300 mb-4">
            Nicklaus values the ability to express themselves in their work and have creative freedom, making the most of their free time by playing games with friends and constantly keeping themselves busy with multiple projects. With a quick learning ability and a desire to help others, Nicklaus is a valuable addition to any team. Whether working solo or with a group, Nicklaus is always up for a big project and thrives when surrounded by others.
          </p>
        </div>
        <div className="mt-10 w-full max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Code className="mr-2" /> LUA
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Code className="mr-2" /> Python
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Code className="mr-2" /> Javascript
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Code className="mr-2" /> C#
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Monitor className="mr-2" /> Frontend Development
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Cpu className="mr-2" /> Backend Development
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Cpu className="mr-2" /> Machine Learning
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Edit className="mr-2" /> Video Editing
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Brush className="mr-2" /> Graphic Design
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Gamepad className="mr-2" /> Gaming
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <Users className="mr-2" /> Team Collaboration
            </div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-center">
              <PlayCircle className="mr-2" /> Project Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
