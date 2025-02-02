import { getTestimonials } from "../lib/googleSheets";

export default async function WhyChooseUs() {
  const testimonials = await getTestimonials(); // ✅ Fetch data on the server
  console.log(testimonials);

  return (
    <div className="p-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-yellow-400">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-gray-900 border border-yellow-500 shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-yellow-400 mb-3"
                />
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-300">
                  {testimonial.designation}
                </p>
                <p className="mt-3 text-yellow-300 text-center italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-yellow-500 text-center text-lg">
            No testimonials found.
          </p>
        )}
      </div>
    </div>
  );
}
