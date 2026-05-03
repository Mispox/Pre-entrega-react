import "./ImageBanner.css";

export const ImageBanner = () => {
  return (
    <section className="banner-container">
      <div className="banner-item">
        <img src="/img/photo-1606055289582-a769482a3a8e.avif" alt="Banner 1" />
      </div>
      <div className="banner-item">
        <img src="/img/photo-1610144591825-d5e31490f7c6.avif" alt="Banner 2" />
      </div>
    </section>
  );
};