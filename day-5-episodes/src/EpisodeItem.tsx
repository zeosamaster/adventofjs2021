import React from "react";
import { Episode } from "./episodes";

interface Props extends Episode {
  onClick: (id: number, holding: boolean) => void;
  register: (id: string) => any;
}

export function EpisodeItem({ id, name, onClick, register }: Props) {
  const onEpisodeClick = React.useCallback(
    (e) => onClick(id, e.shiftKey),
    [id, onClick]
  );

  const episodeId = `episode-${id}`;

  return (
    <li>
      <label htmlFor={episodeId}>
        <input
          type="checkbox"
          name={episodeId}
          id={episodeId}
          onClick={onEpisodeClick}
          {...register(episodeId)}
        />
        <span>
          {id} || {name}
        </span>
      </label>
    </li>
  );
}
