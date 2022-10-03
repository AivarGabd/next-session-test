import type { NextPage } from 'next'
import { getSession } from "./lib/get-session";

const Home: NextPage = ({ views }: any) => {

  if(views){
    return (
      <div>In this session, you have visited this website {views} time(s).</div>
    )
  }

  return <div>loading...</div>
  
}


export async function getServerSideProps({ req, res }: any) {
  const session = await getSession(req, res);
  session.views = session.views ? session.views + 1 : 1;
  // Also available under req.session:
  // req.session.views = req.session.views ? req.session.views + 1 : 1;
  return {
    props: {
      views: session.views,
    },
  };
}


export default Home
