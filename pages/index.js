import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie image"
            onClick={() => onClick(movie.id, movie.original_title)}
          />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title} </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// Server Side Rendering 실행 소스, server 에서 실행됨,
// server 에서 실행되기때문에 api 키를 여기에서 숨길수 있음.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ) // next.config.js 에서 작성한 api url
    .json();
  return {
    props: { results },
  };
}
