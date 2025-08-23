const testimonials = [
  {
    name: "Alex Chen",
    title: "Pro Gamer & Streamer",
    game: "Valorant",
    avatar: "🎮",
    rating: 5,
    text: "Trendinus transformed my gaming hobby into a six-figure income. The brand partnerships they've connected me with are incredible, and the tools make content creation so much easier.",
    metrics: "500K+ followers"
  },
  {
    name: "Sarah Rodriguez",
    title: "Content Creator",
    game: "Fortnite",
    avatar: "👩‍💻",
    rating: 5,
    text: "The analytics dashboard is a game-changer! I can track which content performs best and optimize my strategy. My engagement has increased by 300% since joining.",
    metrics: "2M+ views/month"
  },
  {
    name: "Marcus Johnson",
    title: "Esports Influencer",
    game: "League of Legends",
    avatar: "🏆",
    rating: 5,
    text: "Finally found a platform that understands gamers. The community features help me connect with my audience on a deeper level, and the monetization tools are fantastic.",
    metrics: "$50K+ earnings"
  },
  {
    name: "Emma Thompson",
    title: "Gaming Streamer",
    game: "Apex Legends",
    avatar: "🎯",
    rating: 5,
    text: "From zero to hero! Trendinus helped me grow from 1K to 250K followers in just 8 months. The brand matching algorithm is spot-on with relevant partnerships.",
    metrics: "250K followers"
  },
  {
    name: "David Kim",
    title: "Mobile Gaming Influencer", 
    game: "PUBG Mobile",
    avatar: "📱",
    rating: 5,
    text: "The campaign management tools are incredible. I can handle multiple brand deals simultaneously without missing deadlines. My income has tripled!",
    metrics: "1M+ reach"
  },
  {
    name: "Lisa Park",
    title: "Indie Game Developer",
    game: "Indie Games",
    avatar: "🎨",
    rating: 5,
    text: "Not just for streamers! As an indie developer, Trendinus helped me find influencers to showcase my games. The platform works for both sides of the industry.",
    metrics: "500+ collabs"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Gaming Legends
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful gamers who've leveled up their influence and income with Trendinus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-300 text-xs">
                      {testimonial.title}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonial.game}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="text-right">
                  <div className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {testimonial.metrics}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-gray-300 font-medium">Active Gamers</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              $10M+
            </div>
            <p className="text-gray-300 font-medium">Creator Earnings</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              500+
            </div>
            <p className="text-gray-300 font-medium">Brand Partners</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              98%
            </div>
            <p className="text-gray-300 font-medium">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}