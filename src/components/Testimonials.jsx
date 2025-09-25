import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const testimonials = [
  {
    review: "CrafWeb delivered a highly professional yoga website that exceeded our expectations. His attention to detail and creative solutions were outstanding. Highly recommended!",
    name: "Rishav Rana",
    image: "/client-rishav.jpg",
    rating: 5,
  },
  {
    review: "Working with CrafWeb was a great experience. They understood our complex requirements perfectly and built a robust application on time. Their MERN stack expertise is top-notch.",
    name: "Mohit ",
    image: "/mohit.jpg",
    rating: 5,
  },
  {
    review: "The portfolio website CrafWeb built for me is amazing! It’s clean, fast, and beautifully designed. They made the entire process seamless and fun.",
    name: "Mayank Rana",
    image: "/client-mayank.png",
    rating: 5,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function Testimonials() {
  return (
    <motion.section
      className="bg-gray-900 py-16 px-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Clients Reviews
        </h2>

        <div className="mx-auto max-w-2xl">
          <Splide
            options={{
              type: 'loop',
              autoplay: true,
              interval: 2000,
              pauseOnHover: true,
              perPage: 1,
              pagination: false,
              arrows: false,
              breakpoints: {
                640: {
                  perPage: 1,
                  arrows: false,
                  pagination: true,
                },
                1024: {
                  perPage: 2,
                  arrows: false,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={index}>
                <div className="bg-gray-900 rounded-lg p-8 mx-2 flex flex-col justify-between h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-4">
                    <div className="flex flex-col items-center md:items-start flex-shrink-0 mb-4 md:mb-0 w-full md:w-auto">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-40 h-40 object-cover rounded-full border-2 border-cyan-400 mb-4"
                      />
                      <p className="text-cyan-400 font-bold text-xl">{testimonial.name}</p>
                      <div className="flex text-yellow-400 space-x-1 mt-2 text-xl">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-xl italic text-center md:text-left flex-grow">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;