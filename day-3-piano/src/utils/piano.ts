export const play = (index: number) => {
  const audioFile = `audio/key-${index}.mp3`;
  try {
    new Audio(audioFile).play();
  } catch (e) {
    console.warn(index);
  }
};
