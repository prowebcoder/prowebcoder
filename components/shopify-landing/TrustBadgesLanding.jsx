"use client";

import PremiumAppPage from "./premium/PremiumAppPage";
import { buildTrustBadgesPremiumConfig } from "./premium/premiumConfigs";

export default function TrustBadgesLanding() {
  return <PremiumAppPage config={buildTrustBadgesPremiumConfig()} />;
}
