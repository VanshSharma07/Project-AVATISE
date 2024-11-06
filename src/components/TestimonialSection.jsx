import React from 'react';

const testimonialData = [
  {
    id: 1,
    name: "Kenzie Edgar",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "Stevie Tifft",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
    role: "Tech Lead"
  },
  {
    id: 3,
    name: "Tommie Ewart",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
    role: "Marketing Director"
  },
  {
    id: 4,
    name: "Charlie Howse",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus.",
    role: "Senior Developer"
  },
  {
    id: 5,
    name: "Nevada Herbertson",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur!",
    role: "UX Researcher"
  },
  {
    id: 6,
    name: "Kris Stanton",
    avatar: "/api/placeholder/100/100",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
    role: "Product Manager"
  }
];

const TestimonialSection = () => {
  const chunks = testimonialData.reduce((acc, _, i) => {
    if (i % 2 === 0) {
      acc.push(testimonialData.slice(i, i + 2));
    }
    return acc;
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-5">
      <div className="w-full bg-white/80 backdrop-blur-sm border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
              What people <br />are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light text-gray-600">
              Discover why our customers love working with us
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>

          <div className="-mx-3 md:flex items-start">
            {chunks.map((columnTestimonials, columnIndex) => (
              <div key={columnIndex} className="px-3 md:w-1/3">
                {columnTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 
                             text-gray-800 font-light mb-6 relative
                             transform transition-all duration-300 ease-in-out
                             hover:scale-105 hover:shadow-xl hover:border-indigo-300
                             hover:bg-gradient-to-br hover:from-white hover:to-indigo-50
                             group"
                  >
                    <div className="absolute -right-2 -top-2 w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 
                                  rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 
                                  transform group-hover:scale-150">
                    </div>
                    
                    <div className="w-full flex mb-4 items-center relative z-10">
                      <div className="overflow-hidden rounded-full w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 
                                    border-2 border-white shadow-inner transform transition-transform duration-300 
                                    group-hover:scale-110 group-hover:rotate-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600 group-hover:text-indigo-600 
                                     transition-colors duration-300">
                          {testimonial.name}
                        </h6>
                        <p className="text-xs text-gray-500 transition-colors duration-300 group-hover:text-indigo-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="w-full relative z-10">
                      <p className="text-sm leading-tight">
                        <span className="text-lg leading-none italic font-bold text-indigo-400 mr-1">
                          "
                        </span>
                        {testimonial.text}
                        <span className="text-lg leading-none italic font-bold text-indigo-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;