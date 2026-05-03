"use client";

import PremiumAppPage from "./premium/PremiumAppPage";
import { buildCartflexPremiumConfig } from "./premium/premiumConfigs";

export default function CartflexLanding() {
  return <PremiumAppPage config={buildCartflexPremiumConfig()} />;
}
