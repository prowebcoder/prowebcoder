"use client";

import PremiumAppPage from "./premium/PremiumAppPage";
import { buildWishlistPremiumConfig } from "./premium/premiumConfigs";

export default function CustomerWishlistLanding() {
  return <PremiumAppPage config={buildWishlistPremiumConfig()} />;
}
