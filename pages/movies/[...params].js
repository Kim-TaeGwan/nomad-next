import React from "react";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // const [title, id] = router.query.params || [];
  // 시크릿 모드 등 같은 경우 에 접속하는 경우 에러를 발생시킨다. 그 이유는 이 페이지가 백엔드에서 pre-render 된다 즉 server 에서 미리 렌더링이 된다.
  // 그래서 server 에는 router.query.params 가 아직 존재하지 않는다.
  // router.query.params 는 서버에서 아직 배열이 아니기 때문에 || [] 를 추가한다.
  // const [title, id] = router.query.params || [];; 이렇게 작성.
  // 그럼 에러는 발생하지 않는다. 이건 client-side rendering 만 해준것.
  // 그래서 검색엔지은 소스코드 어디에서도 title 을 찾을 수 없다.
  // 그리고 컴포넌트 내부에서 router 를 사용하면 router 는 프론트에서만 실행이 된다.

  //  || [] 를 추가하면 작동되는 이유 (퍼옴)
  // 기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다.
  // 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다.
  // 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고,
  // js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌 router.query.params에서 값을 가져와서 뿌려주는거죠.
  // 정확하게 보고싶으신 분들은 검사 -> 네트워크 -> slow 3g 로 설정하신 후에 페이지 렌더링 확인하시면 먼저 html쪽 뜨고나서 js까지 모두 다운로드 된 후에야 title이 보이는걸 볼 수 있으실거예요.

  // 그런 경우 아래처럼 getServerSideProps() 를 사용하여 server side rendering을 해줄 것.
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
