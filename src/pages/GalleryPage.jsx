import FlipCard from "./FlipCard";
import { IMAGES } from "./images";
import "./gallery.css";
export default function GalleryPage({ user, onSignOut }) {
  return (
    <div className="lm-gallery">

      <div className="lm-header">
        <div className="lm-header-left">
          <div className="lm-avatar" />
          <div className="lm-header-title">Lady Midnight ✨</div>
        </div>
        <button className="lm-signout-btn" onClick={onSignOut}>
          Sign Out
        </button>
      </div>

      <div className="lm-body">
        <div className="lm-section-title">
          My Gallery — {user.displayName || user.email}
        </div>
        <div className="lm-grid">
          {IMAGES.map((item, i) => (
            <FlipCard key={i} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
}
