import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Projects() {
  const projects = [
    {
      image: "/TrafficMonitor.png",
      title: "Traffic Monitor",
      description: "Real-time traffic analysis with advanced monitoring and data visualization",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/ethantiller/TrafficMonitorOld"
    },
    {
      image: "/stock.png",
      title: "Stock Analysis Tool",
      description: "Comprehensive market analysis platform with predictive algorithms",
      tech: ["Python", "TensorFlow", "React"],
      link: "https://github.com/ethantiller/Stock-O-Clock"
    },
    {
      image: "/cryptobot.png",
      title: "Crypto Trading Bot",
      description: "Automated trading bot with advanced algorithms and risk management",
      tech: ["JavaScript", "WebSocket", "API"],
      link: "https://github.com/ethantiller/crypto-bot"
    },
    {
      image: "/blackjack.png",
      title: "Local Network Blackjack",
      description: "Multiplayer blackjack game for local network play with real-time synchronization",
      tech: ["Socket.io", "Express", "JavaScript"],
      link: "https://github.com/ethantiller/Local-Network-Coroutine-Blackjack"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          navigation={{
            nextEl: '.nav-next',
            prevEl: '.nav-prev',
          }}
          pagination={{
            clickable: true,
            el: '.pagination-dots',
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            }
          }}
          className="pb-12"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl transition-colors duration-300" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="nav-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-blue-200 hover:shadow-blue-100/50 transition-all duration-300 disabled:opacity-50">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="nav-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:border-blue-200 hover:shadow-blue-100/50 transition-all duration-300 disabled:opacity-50">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots flex justify-center mt-6"></div>

      <style jsx>{`
        .swiper {
          padding: 0 20px;
        }

        .pagination-dots .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          margin: 0 4px;
          cursor: pointer;
        }

        .pagination-dots .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.25);
        }

        .pagination-dots .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
          background: #9ca3af;
          transform: scale(1.1);
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        .swiper-wrapper {
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .swiper:hover .nav-prev,
          .swiper:hover .nav-next {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
