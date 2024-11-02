import React, { useState } from 'react';

const AboutCustomers = () => {
  const [customers, setCustomers] = useState([
    {
        id: 1,
        date: "2023-07-15",
        category: "Website Experience",
        title: "Excellent User Interface",
        description: "The website is very user-friendly and easy to navigate. The design is clean and appealing, making it enjoyable to browse.",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        author: "Michael Foster",
        position: "Frequent Visitor"
      },
      {
        id: 2,
        date: "2023-08-21",
        category: "Food Quality",
        title: "Delicious and Fresh",
        description: "The food offered is always fresh and tastes amazing. The variety of dishes caters to different tastes and preferences.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        author: "Sarah Williams",
        position: "Food Enthusiast"
      },
      {
        id: 3,
        date: "2023-09-05",
        category: "Service Quality",
        title: "Outstanding Customer Service",
        description: "The service team is professional and responsive. They handle inquiries promptly and ensure a pleasant experience for all customers.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        author: "John Doe",
        position: "Satisfied Customer"
      }
    ]);

  return (
    <div className="bg-gray-100 py-24 sm:py-32 font-playfair">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-themeColor sm:text-5xl">
            From Customer's opinion
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {customers.map((customer) => (
            <article key={customer.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={customer.date} className="text-themeColor">{customer.date}</time>
                <span className="relative z-10 rounded-full  px-3 py-1.5 font-medium text-themeRed bg-gray-200 hover:bg-gray-100">
                  {customer.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  {customer.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-themeColor">{customer.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={customer.image} alt="" className="h-10 w-10 rounded-full " />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">{customer.author}</p>
                  <p className="text-themeColor">{customer.position}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCustomers;
