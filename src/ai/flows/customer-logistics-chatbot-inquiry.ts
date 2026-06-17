'use server';
/**
 * @fileOverview An AI assistant tool that handles common queries about the shipping zones, transit times, and service levels.
 *
 * - inquireLogistics - A function that handles customer logistics inquiries.
 * - LogisticsInquiryInput - The input type for the inquireLogistics function.
 * - LogisticsInquiryOutput - The return type for the inquireLogistics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LogisticsInquiryInputSchema = z.object({
  question: z.string().describe('The customer\s question about logistics topics.'),
});
export type LogisticsInquiryInput = z.infer<typeof LogisticsInquiryInputSchema>;

const LogisticsInquiryOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot\s answer to the logistics question.'),
});
export type LogisticsInquiryOutput = z.infer<typeof LogisticsInquiryOutputSchema>;

export async function inquireLogistics(input: LogisticsInquiryInput): Promise<LogisticsInquiryOutput> {
  return customerLogisticsChatbotInquiryFlow(input);
}

const logisticsInquiryPrompt = ai.definePrompt({
  name: 'logisticsInquiryPrompt',
  input: {schema: LogisticsInquiryInputSchema},
  output: {schema: LogisticsInquiryOutputSchema},
  prompt: `You are a helpful and informative AI assistant for Envíos DosRuedas, a logistics and e-commerce delivery service.
Your goal is to provide instant and accurate information to customers asking questions about shipping zones, transit times, and various service levels (Express, LowCost, Flex, E-Commerce).

Customer Question: {{{question}}}

Provide a concise and helpful answer based on the information you have. If you do not have specific data, state that you can provide general information or recommend contacting customer support for detailed specifics.`,
});

const customerLogisticsChatbotInquiryFlow = ai.defineFlow(
  {
    name: 'customerLogisticsChatbotInquiryFlow',
    inputSchema: LogisticsInquiryInputSchema,
    outputSchema: LogisticsInquiryOutputSchema,
  },
  async input => {
    const {output} = await logisticsInquiryPrompt(input);
    return output!;
  }
);
