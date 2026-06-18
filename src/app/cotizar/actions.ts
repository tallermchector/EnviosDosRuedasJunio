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

  price = Math.round(price * 100) / 100;
  const estimatedMinutes = Math.round(roundedDistance * 4) + 15;

  return {
    distance: roundedDistance,
    price,
    estimatedTime: `${estimatedMinutes} - ${estimatedMinutes + 15} min`,
  };
}

export async function calculateLowCostQuote(origin: string, destination: string): Promise<QuoteResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock distance calculation (1 - 15 km)
  const distanceKm = Math.floor(Math.random() * 14) + 1 + Math.random();
  const roundedDistance = Math.round(distanceKm * 100) / 100;

  let price = 0;

  // Logic from docs/detalles/cotizar_lowcost.md
  if (roundedDistance <= 3.00) {
    price = 3000;
  } else if (roundedDistance <= 5.00) {
    price = 4000;
  } else if (roundedDistance <= 7.00) {
    price = 5300;
  } else if (roundedDistance <= 10.00) {
    price = 7000;
  } else {
    // > 10km: Base $7000 + $700 per extra km
    const extraKm = roundedDistance - 10.00;
    price = 7000 + (extraKm * 700);
  }

  price = Math.round(price * 100) / 100;

  return {
    distance: roundedDistance,
    price,
    estimatedTime: "En el día (antes de las 19:00 hs)",
  };
}
