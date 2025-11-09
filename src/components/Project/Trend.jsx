import React from 'react'

export const Trend = () => {
  return (
     <>
      <div data-aos="fade-right"
              className="bg-white/10 backdrop-blur-md border border-white/20 p-10 shadow hover:scale-105 transition transform  rounded-4xl animation-spin curser-arrow object-fill" >
                <h1 className='font-extrabold text-pink-500 text-3xl text-center'>Trend-Teller</h1>
                <img src="/trendteller.png" alt="Aura List" className='w-full h-84 object-cover rounded-lg my-5' />
                <p className='text-center object-fill'>- Live Data Integration: Fetches real-time updates from TMDB/IMDb for movies and NewsAPI/GNews for current events.
                - Rich Movie Details: Displays titles, genres, cast, ratings, and trailers with search and filter options.
                - Dynamic News Feed: Covers global headlines across categories like entertainment, tech, and politics.
                - Modular & Responsive Design: Built with reusable components and optimized for all screen sizes.
                - Accessible & Engaging UI: Includes multilingual support, keyboard navigation, and smooth animations for an immersive experience.
                - Ideal for Learners & Explorers: Great for developers practicing API integration and users seeking a unified dashboard for entertainment and news.
 </p>

     </div>
   
     </>
  )
}
