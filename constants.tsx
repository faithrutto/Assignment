
import { HairType, RoutineEntry } from './types';

export const HAIR_ROUTINES: RoutineEntry[] = [
  {
    hairType: HairType.DRY,
    recommendedRoutine: 'Hydrating mask, leave-in conditioner, avoid daily washing.',
    suggestedFrequency: '2-3 times per week'
  },
  {
    hairType: HairType.OILY,
    recommendedRoutine: 'Clarifying shampoo, lightweight conditioner on ends only.',
    suggestedFrequency: 'Daily or every other day'
  },
  {
    hairType: HairType.CURLY,
    recommendedRoutine: 'Sulfate-free shampoo, wide-tooth comb, curl cream, plopping.',
    suggestedFrequency: '2-3 times per week'
  },
  {
    hairType: HairType.NORMAL,
    recommendedRoutine: 'Balanced shampoo and conditioner, heat protectant.',
    suggestedFrequency: '3-4 times per week'
  },
  {
    hairType: HairType.COILY,
    recommendedRoutine: 'LOC method (Liquid, Oil, Cream), deep conditioning, low manipulation.',
    suggestedFrequency: 'Once per week'
  }
];

export const DAILY_TIPS = [
  'Massage your scalp for 5 minutes daily to increase blood flow.',
  'Sleep on a silk or satin pillowcase to reduce friction.',
  'Avoid tying hair too tightly to prevent traction alopecia.',
  'Rinse hair with cool water to seal the cuticles.',
  'Eat a protein-rich diet including eggs, berries, and spinach.'
];

export const CARE_STEP_BY_STEP = [
  'Detangle: Gently comb through knots starting from the ends.',
  'Pre-Poo: Apply oil or treatment before washing if your hair is very dry.',
  'Wash: Focus shampoo on the scalp, massaging gently.',
  'Condition: Apply conditioner from mid-shaft to ends.',
  'Dry: Blot hair with a microfiber towel; do not rub.',
  'Protect: Apply leave-in treatments or heat protectants.'
];
