'use server';
/**
 * @fileOverview A Genkit flow for recommending optimal character and weapon loadouts for FAU-G Domination.
 *
 * - aiTacticalLoadoutRecommendation - A function that handles the loadout recommendation process.
 * - AITacticalLoadoutRecommendationInput - The input type for the aiTacticalLoadoutRecommendation function.
 * - AITacticalLoadoutRecommendationOutput - The return type for the aiTacticalLoadoutRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AITacticalLoadoutRecommendationInputSchema = z.object({
  mapType: z.string().describe('The type of map being played (e.g., "urban", "desert", "forest", "snow").'),
  gameMode: z.string().describe('The game mode (e.g., "team deathmatch", "battle royale", "capture the flag", "sniper").'),
});
export type AITacticalLoadoutRecommendationInput = z.infer<typeof AITacticalLoadoutRecommendationInputSchema>;

const AITacticalLoadoutRecommendationOutputSchema = z.object({
  character: z.string().describe('The recommended character for the given map type and game mode.'),
  weapon: z.string().describe('The recommended weapon for the given map type and game mode.'),
  reasoning: z.string().describe('A detailed explanation for the recommended character and weapon loadout.'),
});
export type AITacticalLoadoutRecommendationOutput = z.infer<typeof AITacticalLoadoutRecommendationOutputSchema>;

export async function aiTacticalLoadoutRecommendation(
  input: AITacticalLoadoutRecommendationInput
): Promise<AITacticalLoadoutRecommendationOutput> {
  return aiTacticalLoadoutRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiTacticalLoadoutRecommendationPrompt',
  input: { schema: AITacticalLoadoutRecommendationInputSchema },
  output: { schema: AITacticalLoadoutRecommendationOutputSchema },
  prompt: `You are an expert tactical advisor for the game FAU-G Domination.
Your goal is to recommend an optimal character and weapon loadout based on the player's map type and game mode.
Provide a specific character from the available roster (Dhillon, Kiran, Adhira, Saya, Vegh, Agni, Raaz, Veesh, Mazhala, Nibir), a specific weapon from the arsenal (like AK-203, GALIL, TAVOR, M4A4, AK-47, M4A1, MP9, MAC 10, UMP 45, PP BIZON, MP5, MP7, P 90, SAWED OFF, MAG-7, XM1014, NOVA, RPD, NEGEV, SSG-SCOUT, AWP, DRGUNOV-SCO, SCAR-20), and a clear reasoning for your choices.

Map Type: {{{mapType}}}
Game Mode: {{{gameMode}}}`,
});

const aiTacticalLoadoutRecommendationFlow = ai.defineFlow(
  {
    name: 'aiTacticalLoadoutRecommendationFlow',
    inputSchema: AITacticalLoadoutRecommendationInputSchema,
    outputSchema: AITacticalLoadoutRecommendationOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) throw new Error("AI failed to generate a recommendation.");
    return output;
  }
);