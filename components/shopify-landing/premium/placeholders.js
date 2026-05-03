/** Stable placeholder images for Shopify landing mocks (picsum.photos fixed ids). */

export const PWC_PLACEHOLDER = {
  /** Hero / wide product-style frame */
  wide: (id = 180) => `https://picsum.photos/id/${id}/960/560`,
  /** Gallery / bento tile */
  tile: (index) => {
    const ids = [24, 48, 64, 106, 152, 201];
    return `https://picsum.photos/id/${ids[index % ids.length]}/560/420`;
  },
  /** Small SKU / row thumbnail */
  thumb: (index) => {
    const ids = [237, 429, 431, 433, 445, 447];
    return `https://picsum.photos/id/${ids[index % ids.length]}/128/128`;
  },
  /** Analytics / dashboard strip */
  chartStrip: () => "https://picsum.photos/id/60/960/320",
};
