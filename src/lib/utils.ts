import { CAREER_START_DATE } from "@/constants"

export const calculateYearsExperience = () => {
  return (
    (new Date().getTime() - new Date(CAREER_START_DATE).getTime()) /
    31556952000
  ).toFixed(1)
}
