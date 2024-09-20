import React from 'react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';




const testimonials = [
  {
    name: 'Jane D',
    role: 'CEO',
    avatar: '/assets/img/prising/women-1.avif',
    quote: 'Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.',
    rating: 4.9,
  },
  {
    name: 'John S',
    role: 'Entrepreneur',
    avatar: '/assets/img/prising/men-2.webp',
    quote: 'Thanks to Pagedone, I feel more informed and confident about my investment decisions than ever before.',
    rating: 4.8,
  },
  {
    name: 'Alice M',
    role: 'Marketing Director',
    avatar: '/assets/img/prising/men-4.avif',
    quote: 'The platform is intuitive and the customer support is top-notch. Highly recommend!',
    rating: 5.0,
  },
  {
    name: 'Bob L',
    role: 'Developer',
    avatar: '/assets/img/prising/women-3.avif',
    quote: 'An essential tool for anyone serious about their financial management. Great experience!',
    rating: 4.7,
  },
  {
    name: 'Emma W',
    role: 'Freelancer',
    avatar: '/assets/img/prising/men-5.avif',
    quote: 'Pagedone has simplified my financial tracking. I love how easy it is to use.',
    rating: 4.9,
  },
  {
    name: 'Liam R',
    role: 'Business Analyst',
    avatar: '/assets/img/prising/men-6.avif',
    quote: 'A game-changer for managing my investments. The insights are incredibly useful.',
    rating: 4.8,
  },
  {
    name: 'Sophia T',
    role: 'Product Manager',
    avatar: '/assets/img/prising/men-1.webp',
    quote: 'Highly functional and user-friendly. It has helped me stay organized with my portfolio.',
    rating: 5.0,
  },
  {
    name: 'Olivia P',
    role: 'Consultant',
    avatar: '/assets/img/prising/men-5.avif',
    quote: 'The features are exactly what I need for efficient financial management. Excellent!',
    rating: 4.9,
  },
  {
    name: 'Noah K',
    role: 'Investor',
    avatar: '/assets/img/prising/men-2.webp',
    quote: 'Pagedone offers great value. It has become an indispensable tool for tracking my investments.',
    rating: 4.7,
  },
  {
    name: 'Ava B',
    role: 'Analyst',
    avatar: '/assets/img/prising/women-1.avif',
    quote: 'Fantastic tool with powerful features. It has greatly enhanced my financial management.',
    rating: 4.8,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#12151A' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-gray-500 font-medium block mb-2">TESTIMONIAL</span>
          <h2 className="text-4xl font-bold text-white">What our happy users say!</h2> {/* Updated color */}
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">{testimonial.rating}</span>
                  </div>
                  <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={testimonial.avatar}
                    alt="avatar"
                  />
                  <div>
                    <h5 className="text-gray-900 font-medium mb-1">{testimonial.name}</h5>
                    <span className="text-sm leading-4 text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

