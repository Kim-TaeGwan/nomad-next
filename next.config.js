const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/test/:path*", // 특정 url 접근시
        destination: "/redirect/:path*", // 여기로 redirect
        permanent: false, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부
      },
    ];
  },
  async rewrites() {
    // api 조회, api 키를 숨기는 방법
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
