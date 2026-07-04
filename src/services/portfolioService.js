
import * as mock from '../data/portfolioData'



export const getProfile = () => Promise.resolve(mock.profile)
export const getAiSkills = () => Promise.resolve(mock.aiSkills)
export const getSkillCategories = () => Promise.resolve(mock.skillCategories)
export const getProjects = () => Promise.resolve(mock.projects)
export const getLeetcodeStats = () => Promise.resolve(mock.leetcode)
export const getExperience = () => Promise.resolve(mock.experience)
export const getCertifications = () => Promise.resolve(mock.certifications)
export const getAchievements = () => Promise.resolve(mock.achievements)
export const getEducation = () =>
  Promise.resolve({ education: mock.education, journey: mock.learningJourney })
