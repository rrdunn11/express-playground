import Post from '../components/post';
import Profile from '../components/profile';
import Header from '../components/header';
import expressSvc from '../lib/services/expressSvc';

export const getServerSideProps = async () => {
  const res = await expressSvc.get("/profile?id=1")
  return {
    props: {
      profile: res.data,
    }
  }
}

export default function HomePage({profile}) {
  return (
    <div>
      <Header title="Message Dashboard" />
      <Profile {...profile}/>
      <Post />
    </div>
  );
}
