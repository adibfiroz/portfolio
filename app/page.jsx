import "./home.scss";
import HomeComponents from "../components/Home-components";
import UpdateViews from "./actions/update-views";

const Home = async () => {
  await UpdateViews();
  return (
    <div>
      <HomeComponents />
    </div>
  );
};

export default Home;
