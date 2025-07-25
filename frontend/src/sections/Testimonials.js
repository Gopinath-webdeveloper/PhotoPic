import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Photopic has completely transformed my workflow. The ability to store and share high-resolution photos is a game-changer.",
    name: 'Elena Rodriguez',
    title: 'Professional Photographer',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    quote: "An incredible platform for discovering new talent. I've connected with so many inspiring photographers here.",
    name: 'Marcus Chen',
    title: 'Hobbyist Photographer',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    quote: "The best community for photographers, hands down. The support and feedback have been invaluable for my growth.",
    name: 'Aisha Khan',
    title: 'Creative Director',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn mb-4">
          Loved by Creatives Worldwide
        </h2>
        <p className="text-lg text-text/80">Don't just take our word for it. Here's what our community is saying.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            className="bg-black/20 p-8 rounded-2xl border border-white/20 flex flex-col justify-between shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-text/90 mb-6 italic">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-accent" />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-text/70">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 