import styles from "./StoreLinks.module.scss";
import Link from "../Link";

interface StoreLinksProps {
  appleAppStoreUrl?: string;
  googlePlayStoreUrl?: string;
  itchioUrl?: string;
}

const StoreLinks = ({
  appleAppStoreUrl,
  googlePlayStoreUrl,
  itchioUrl,
}: StoreLinksProps) => {
  if (!appleAppStoreUrl && !googlePlayStoreUrl && !itchioUrl) {
    return null;
  }
  return (
    <div className={styles.storeLinks}>
      {itchioUrl && (
        <Link href={itchioUrl} newTab>
          <img
            src="/img/ui/badge-itch-io.svg"
            alt="itch.io Link"
            className={styles.itchioBadge}
          />
        </Link>
      )}
      {appleAppStoreUrl && (
        <Link href={appleAppStoreUrl} newTab>
          <img
            src="/img/ui/badge-app-store.svg"
            alt="App Store Link"
            className={styles.appleAppStoreBadge}
          />
        </Link>
      )}
      {googlePlayStoreUrl && (
        <Link href={googlePlayStoreUrl} newTab>
          <img
            src="/img/ui/badge-google-play.png"
            alt="Play Store Link"
            className={styles.googlePlayStoreBadge}
          />
        </Link>
      )}
    </div>
  );
};

export default StoreLinks;
