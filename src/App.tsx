import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import SideNavBar from "./component/SideNavBar/SideNavBar";
import ForYou from "./views/ForYou/ForYou";
import AppContext from "./context/appcontext";

function App() {
  const [renderChild, setRenderChild] = useState<React.ReactNode>(<ForYou />);
  const handleListIemOnclick = (value: string, customNode: React.ReactNode) => {
    setRenderChild(customNode);
  };

  const getPlayListData = async () => {
    const url =
      "https://www.discogs.com/service/header/public/api/autocomplete";

    try {
      const response = await fetch(url);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPlayListData();
  }, []);
  return (
    <AppContext>
      <div className={styles.appContainer}>
        <SideNavBar handleListIemOnclick={handleListIemOnclick} />
        <div className={styles.renderChild}>{renderChild}</div>
      </div>
    </AppContext>
  );
}

export default App;
