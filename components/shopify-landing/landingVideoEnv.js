/** Server-safe env reads for Shopify app landing videos (NEXT_PUBLIC_*). */

/** Default product tours when env is unset (Wishlist · CartFlex · Trust Badges). */
const DEFAULT_WISHLIST_YT = "https://youtu.be/br0vYiOPOXg";
const DEFAULT_CARTFLEX_YT = "https://youtu.be/6eenMolF8rY";
const DEFAULT_TRUST_YT = "https://youtu.be/9g5Aqn-EQQQ";

export function getWishlistVideo() {
  return {
    youtube: process.env.NEXT_PUBLIC_PWC_VIDEO_WISHLIST?.trim() || DEFAULT_WISHLIST_YT,
    vimeo: process.env.NEXT_PUBLIC_PWC_VIMEO_WISHLIST?.trim() || "",
  };
}

export function getCartflexVideo() {
  return {
    youtube: process.env.NEXT_PUBLIC_PWC_VIDEO_CARTFLEX?.trim() || DEFAULT_CARTFLEX_YT,
    vimeo: process.env.NEXT_PUBLIC_PWC_VIMEO_CARTFLEX?.trim() || "",
  };
}

export function getTrustBadgesVideo() {
  return {
    youtube: process.env.NEXT_PUBLIC_PWC_VIDEO_TRUST?.trim() || DEFAULT_TRUST_YT,
    vimeo: process.env.NEXT_PUBLIC_PWC_VIMEO_TRUST?.trim() || "",
  };
}

export function getHubVideo() {
  return {
    youtube: process.env.NEXT_PUBLIC_PWC_VIDEO_HUB?.trim() || "",
    vimeo: process.env.NEXT_PUBLIC_PWC_VIMEO_HUB?.trim() || "",
  };
}
