import "./SpotifyPlayer.css";

export const SpotifyPlayer = () => {
  return (
    <div className="spotify-container">
      <iframe
        src="https://open.spotify.com/embed/album/2s2zPflNtcbqk7zT1GJBYw"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};