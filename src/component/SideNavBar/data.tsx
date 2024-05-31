import Favourties from "../../views/Favourties/Favourties";
import ForYou from "../../views/ForYou/ForYou";
import RecentlyPlayed from "../../views/RecentlyPlayed/RecentlyPlayed";
import TopTracks from "../../views/TopTracks/TopTracks";

export const listOfSubTitle = [
  { id: 1, title: "For You", child: <ForYou /> },
  {
    id: 2,
    title: "Top Tracks",
    child: <TopTracks />,
  },
  {
    id: 3,
    title: "Favourites",
    child: <Favourties />,
  },
  {
    id: 4,
    title: "Recently Played",
    child: <RecentlyPlayed />,
  },
];
