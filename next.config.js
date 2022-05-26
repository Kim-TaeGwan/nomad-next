const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/test/:path*", // 특정 url 접근시
        destination: "/redirect/:path*", // 여기로 redirect
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // api 조회
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
