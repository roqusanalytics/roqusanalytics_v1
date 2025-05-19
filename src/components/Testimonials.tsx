
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jonas Petraitis",
    position: "Finansų direktorius",
    company: "Lietuvos Prekyba",
    content: "Roqus Analytics komanda padėjo mums sukurti išsamias finansines ataskaitas, kurios leido 30% greičiau priimti svarbius verslo sprendimus.",
    rating: 5
  },
  {
    id: 2,
    name: "Milda Kazlauskienė",
    position: "Pardavimų vadovė",
    company: "Baltic Solutions",
    content: "Power BI ataskaitos, kurias sukūrė Roqus Analytics, padėjo mums identifikuoti naujus pardavimų kanalus ir padidinti pajamas 25% per pirmus metus.",
    rating: 5
  },
  {
    id: 3,
    name: "Tomas Butkus",
    position: "Gamybos vadovas",
    company: "Gamyba Pro",
    content: "Duomenų analitikos sprendimai padėjo optimizuoti gamybos procesus ir sumažinti atliekų kiekį 18%. Investicija atsipirko per 4 mėnesius.",
    rating: 4
  },
  {
    id: 4,
    name: "Greta Paulauskienė",
    position: "Logistikos direktorė",
    company: "Logistika Plus",
    content: "Roqus Analytics sukurtos atsargų valdymo ataskaitos padėjo sumažinti atsargų lygį 30%, išlaikant tą patį klientų aptarnavimo lygį.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (element) observer.unobserve(element);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-nexos-purple/10 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div id="testimonials-section" className="nexos-container relative z-10">
        <div className="text-left max-w-3xl mx-auto mb-16">
          <h2 className="nexos-heading mb-6">
            Klientų <span className="nexos-gradient-text">atsiliepimai</span>
          </h2>
          <p className="nexos-subheading">
            Įvairaus dydžio įmonės naudoja Roqus Analytics paslaugas, kad transformuotų savo veiklą ir atrastų naujas galimybes.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="nexos-card text-center p-8 md:p-10">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-gray-200 mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-6 bg-nexos-purple" : "w-2 bg-gray-600"
                  }`}
                  aria-label={`Pereiti į atsiliepimą ${i + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full bg-nexos-dark-light border border-nexos-dark-lighter flex items-center justify-center text-white hover:border-nexos-purple/50 transition-colors"
              aria-label="Ankstesnis atsiliepimas"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full bg-nexos-dark-light border border-nexos-dark-lighter flex items-center justify-center text-white hover:border-nexos-purple/50 transition-colors"
              aria-label="Kitas atsiliepimas"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
