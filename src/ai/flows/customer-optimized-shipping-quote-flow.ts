'use server';
/**
 * @fileOverview An AI agent that provides optimized shipping cost estimates.
 *
 * - customerOptimizedShippingQuote - A function that handles the shipping quote generation process.
 * - CustomerOptimizedShippingQuoteInput - The input type for the customerOptimizedShippingQuote function.
 * - CustomerOptimizedShippingQuoteOutput - The return type for the customerOptimizedShippingQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomerOptimizedShippingQuoteInputSchema = z.object({
  length: z.number().positive().describe('Length of the package in cm.'),
  width: z.number().positive().describe('Width of the package in cm.'),
  height: z.number().positive().describe('Height of the package in cm.'),
  weight: z.number().positive().describe('Weight of the package in kg.'),
  urgency: z.enum(['express', 'standard', 'flex']).describe('Desired shipping urgency for the package.'),
});
export type CustomerOptimizedShippingQuoteInput = z.infer<typeof CustomerOptimizedShippingQuoteInputSchema>;

const CustomerOptimizedShippingQuoteOutputSchema = z.object({
  expressEstimate: z.object({
    cost: z.number().positive().describe('Optimized cost for express shipping in USD.'),
    estimatedDeliveryDays: z.number().int().positive().describe('Estimated delivery time in days for express shipping.'),
  }).describe('Optimized cost estimate and delivery time for express shipping.'),
  flexEstimate: z.object({
    cost: z.number().positive().describe('Optimized cost for flex shipping in USD.'),
    estimatedDeliveryDays: z.number().int().positive().describe('Estimated delivery time in days for flex shipping.'),
  }).describe('Optimized cost estimate and delivery time for flex shipping.'),
  notes: z.string().optional().describe('Any additional notes or recommendations regarding the shipping options.'),
});
export type CustomerOptimizedShippingQuoteOutput = z.infer<typeof CustomerOptimizedShippingQuoteOutputSchema>;

export async function customerOptimizedShippingQuote(
  input: CustomerOptimizedShippingQuoteInput
): Promise<CustomerOptimizedShippingQuoteOutput> {
  return customerOptimizedShippingQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customerOptimizedShippingQuotePrompt',
  input: {schema: CustomerOptimizedShippingQuoteInputSchema},
  output: {schema: CustomerOptimizedShippingQuoteOutputSchema},
  prompt: `You are an intelligent shipping quote engine for Envíos DosRuedas, a logistics company specializing in e-commerce and messaging in MDP.
Your task is to provide optimized cost estimates for express and flex delivery options based on the provided package details and desired urgency.

Consider the following package details:
Length: {{{length}}} cm
Width: {{{width}}} cm
Height: {{{height}}} cm
Weight: {{{weight}}} kg
Desired Urgency: {{{urgency}}}

Reason through these details to generate a plausible and optimized cost estimate (in USD) and estimated delivery days for both 'express' and 'flex' delivery services. Express should generally be faster and more expensive than flex. If the urgency is set to 'express', prioritize faster delivery days. If the urgency is 'flex', prioritize lower cost while still being reasonable.

Provide the output in JSON format, strictly adhering to the specified output schema.`,
});

const customerOptimizedShippingQuoteFlow = ai.defineFlow(
  {
    name: 'customerOptimizedShippingQuoteFlow',
    inputSchema: CustomerOptimizedShippingQuoteInputSchema,
    outputSchema: CustomerOptimizedShippingQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
