import React from 'react';
import { Clock, Users, Building2, Calendar, LogOut, LogIn, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Sample data
const projectData = [
  { name: 'Pending', value: 1.5 },
  { name: 'On Hold', value: 0 },
  { name: 'In Progress', value: 2 },
  { name: 'Completed', value: 2 },
  { name: 'Cancelled', value: 0 }
];

const clients = [
  { name: 'Mohammad Anash', email: 'anas786012@gmail.com', contact: '9876543210', projects: 2 },
  { name: 'Aman Tomar', email: 'aman123@gmail.com', contact: '6789965409', projects: 1 },
  { name: 'Suraj Thakur', email: 'suraj123@gmail.com', contact: '7654321098', projects: 2 },
  { name: 'New Hussein Client', email: 'client@hussein.com', contact: '3213412789', projects: 2 },
  { name: 'ISRAAC 1', email: 'john@john', contact: '767865674', projects: 1 },
  { name: 'HORUMAR 2', email: 'test@test.com', contact: '9826354789', projects: 1 }
];

const recentProjects = [
  {
    title: 'Web admin',
    dateStart: '26 april 2024',
    deadline: '26 may 2024',
    completion: 90,
    priority: 'Easy'
  },
  {
    title: 'react project',
    dateStart: '2 feb 2024',
    deadline: '23 may 2024',
    completion: 100,
    priority: 'Medium'
  },
  {
    title: 'C++ project',
    dateStart: '11 june 2024',
    deadline: '15 july 2024',
    completion: 80,
    priority: 'Medium'
  },
  {
    title: 'server admin',
    dateStart: '26 april 2024',
    deadline: '26 may 2024',
    completion: 60,
    priority: 'High'
  }
];

// Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);

const StatCard = ({ title, value, icon: Icon }) => (
  <Card>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className="bg-pink-100 p-3 rounded-full">
        <Icon className="text-pink-500" size={24} />
      </div>
    </div>
  </Card>
);

const ProjectsChart = () => (
  <Card className="col-span-2">
    <h3 className="font-semibold mb-4">Projects Detail</h3>
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={projectData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#4299E1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
);

const ClientsTable = () => (
  <Card className="col-span-2">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Top Clients</h3>
      <button className="text-pink-500">View All Clients</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">NAME</th>
            <th>EMAIL</th>
            <th>CONTACT</th>
            <th>PROJECT</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{client.name}</td>
              <td>{client.email}</td>
              <td>{client.contact}</td>
              <td>{client.projects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

const RecentProjects = () => (
  <Card className="col-span-2">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Recent Projects</h3>
      <button className="text-pink-500">View All Projects</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">TITLE</th>
            <th>DATE START</th>
            <th>DEADLINE</th>
            <th>COMPLETION</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>
          {recentProjects.map((project, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{project.title}</td>
              <td>{project.dateStart}</td>
              <td>{project.deadline}</td>
              <td>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${project.completion}%` }}
                  />
                </div>
              </td>
              <td>
                <span className={`px-2 py-1 rounded ${
                  project.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {project.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

const Dashboard = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome to Attendance Dashboard</h1>
          <div className="flex items-center gap-4">
            <Clock size={24} />
            <span>{formattedDate}</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Punch In
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="TOTAL EMPLOYEES" value="80" icon={Users} />
          <StatCard title="TOTAL DEPARTMENTS" value="20" icon={Building2} />
          <StatCard title="TOTAL HOLIDAYS" value="4" icon={Calendar} />
          <StatCard title="PAID LEAVES" value="54" icon={Calendar} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="ON LEAVE TODAY" value="0" icon={LogOut} />
          <StatCard title="PENDING LEAVE REQUESTS" value="0" icon={Calendar} />
          <StatCard title="TOTAL CHECK IN TODAY" value="0" icon={LogIn} />
          <StatCard title="TOTAL CHECK OUT TODAY" value="0" icon={LogOut} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProjectsChart />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard title="TOTAL PROJECTS" value="5" icon={Briefcase} />
            <StatCard title="PENDING PROJECTS" value="1" icon={Briefcase} />
            <StatCard title="ON HOLD PROJECTS" value="0" icon={Briefcase} />
            <StatCard title="IN PROGRESS PROJECTS" value="2" icon={Briefcase} />
            <StatCard title="FINISHED PROJECTS" value="2" icon={Briefcase} />
            <StatCard title="CANCELLED PROJECTS" value="0" icon={Briefcase} />
          </div>
        </div>

        <ClientsTable />
        <RecentProjects />
      </div>
    </div>
  );
};

export default Dashboard;