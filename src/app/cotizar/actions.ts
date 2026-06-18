'use server';

/**
 * Handles the calculation of shipping quotes based on distance and service type.
 * Note: In a real app, this would use Google Maps API for distance and Prisma for DB records.
 * For this MVP, we implement the logic provided in the specification.
 */

export type QuoteResult = {
  distance: number;
  price: number;
  estimatedTime: string;
};

export async function calculateExpressQuote(origin: string, destination: string): Promise<QuoteResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock distance calculation (1 - 15 km)
  // In production, use Google Distance Matrix API
  const distanceKm = Math.floor(Math.random() * 14) + 1 + Math.random();
  const roundedDistance = Math.round(distanceKm * 100) / 100;

  let price = 0;

  // Logic from docs/detalles/cotizar_express.md
  if (roundedDistance <= 3.00) {
    price = 3700;
  } else if (roundedDistance <= 5.00) {
    price = 4600;
  } else if (roundedDistance <= 7.00) {
    price = 6100;
  } else if (roundedDistance <= 10.00) {
    price = 8200;
  } else {
    // > 10km: Base $8200 + $1000 per extra km
    const extraKm = roundedDistance - 10.00;
    price = 8200 + (extraKm * 1000);
  }

  // Round price to 2 decimals
  price = Math.round(price * 100) / 100;

  // Mock estimated time based on distance (urban speed average)
  const estimatedMinutes = Math.round(roundedDistance * 4) + 15; // roughly 4 min per km + 15 min buffer

  return {
    distance: roundedDistance,
    price,
    estimatedTime: `${estimatedMinutes} - ${estimatedMinutes + 15} min`,
  };
}
