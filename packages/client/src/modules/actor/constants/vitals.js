import CORE_CONSTANTS from '../../core/constants';

/*
 * ENERGY
 * An average woman needs to eat about 2000 calories per day to maintain, and
 * 1500 calories to lose one pound of weight per week.
 * An average man needs 2500 calories to maintain, and 2000 to lose one pound
 * of weight per week.
 */
export const MAX_DAYS_WITHOUT_FOOD = 35;
export const MALE_CALORIES_BURN_RATE_DAY = 2500;
export const MALE_CALORIES_BURN_RATE_SECOND = MALE_CALORIES_BURN_RATE_DAY / CORE_CONSTANTS.DAY_DURATION;
export const FEMALE_CALORIES_BURN_RATE_DAY = 2000;
export const FEMALE_CALORIES_BURN_RATE_SECOND = FEMALE_CALORIES_BURN_RATE_DAY / CORE_CONSTANTS.DAY_DURATION;
export const MALE_INITIAL_CALORIES = MAX_DAYS_WITHOUT_FOOD * MALE_CALORIES_BURN_RATE_DAY;
export const FEMALE_INITIAL_CALORIES = MAX_DAYS_WITHOUT_FOOD * FEMALE_CALORIES_BURN_RATE_DAY;

/*
 * HYDRATION
 * Approximately 60% of the adult body is made of water (75% in children).
 * The average water output per day is 2500ml (women) and 3500ml (men).
 * For people who are healthy, not particularly active, and living in a
 * moderate climate.
 * It can vary due to: enviromental conditions, activity, age, health,
 * weight, sex or food intake
 * The average person should drink about two liters of water a day
 */
export const MAX_DAYS_WITHOUT_WATER = 10;
export const MALE_HYDRATION_BURN_RATE_DAY = 3500;
export const MALE_HYDRATION_BURN_RATE_SECOND = MALE_HYDRATION_BURN_RATE_DAY / CORE_CONSTANTS.DAY_DURATION;
export const FEMALE_HYDRATION_BURN_RATE_DAY = 2500;
export const FEMALE_HYDRATION_BURN_RATE_SECOND = FEMALE_HYDRATION_BURN_RATE_DAY / CORE_CONSTANTS.DAY_DURATION;
export const MALE_INITIAL_HYDRATION = MAX_DAYS_WITHOUT_WATER * MALE_HYDRATION_BURN_RATE_DAY;
export const FEMALE_INITIAL_HYDRATION = MAX_DAYS_WITHOUT_WATER * FEMALE_HYDRATION_BURN_RATE_DAY;
