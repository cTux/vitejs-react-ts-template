import { z } from 'zod';

export const envSchema = {
  VITE_COUNTER: z.preprocess((value: string) => +value, z.number()).optional(),
};
