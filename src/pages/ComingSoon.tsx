import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set launch date to 3 months from now
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 3);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-600">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-6 py-2 mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-300 text-sm font-semibold tracking-wider uppercase">
                Something Special is Coming
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Cassa Electronic
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Paint Machinery
              </span>
            </h1>

            <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              We're preparing something extraordinary. Our premium electronic paint machinery line 
              will revolutionize your painting experience with professional-grade tools built for perfection.
            </p>

            {/* Countdown */}
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
                { value: seconds, label: 'Seconds' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-2 shadow-xl">
                    <span className="text-3xl md:text-5xl font-bold text-white">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-blue-300 text-xs md:text-sm font-medium uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Features preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: '🎨', title: 'Paint Sprayers', desc: 'Professional airless & HVLP systems' },
                { icon: '⚡', title: 'Power Tools', desc: 'Electric sanders, mixers & more' },
                { icon: '🔧', title: 'Accessories', desc: 'Nozzles, filters & spare parts' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-3xl mb-3 block">{feature.icon}</span>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-blue-300 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25 text-lg"
              >
                Get Notified on Launch
              </Link>
              <Link
                to="/products"
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Browse Other Products
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
