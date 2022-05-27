import React from "react";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return <div>{router.query.title || "Loading..."}</div>;
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies/${router.query.id}`)
//   ).json();
//   return {
//     props: { results },
//   };
// }
