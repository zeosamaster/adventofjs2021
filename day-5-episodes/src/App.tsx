import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { EpisodeItem } from "./EpisodeItem";
import { episodes } from "./episodes";

function App() {
  const { register, setValue } = useForm();

  const [lastClickedEpisode, setLastClickedEpisode] = React.useState<number>();
  const onClick = React.useCallback(
    (id: number, holding: boolean) => {
      if (!holding || !lastClickedEpisode) {
        setLastClickedEpisode(id);
      }

      if (lastClickedEpisode && holding) {
        const min = Math.min(lastClickedEpisode, id);
        const max = Math.max(lastClickedEpisode, id);
        for (let i = 0; i < episodes.length; i++) {
          setValue(`episode-${i}`, false);
        }
        for (let i = min; i <= max; i++) {
          setValue(`episode-${i}`, true);
        }
      }
    },
    [lastClickedEpisode, setValue]
  );

  return (
    <div className="wrapper">
      <div className="cover">
        <img src="podcast-cover.png" alt="Compressed.fm" />
      </div>

      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>

        <ul className="episodes">
          {episodes.map(({ id, name }) => (
            <EpisodeItem
              key={id}
              id={id}
              name={name}
              register={register}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
