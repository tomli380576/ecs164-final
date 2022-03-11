import { RequirementProps } from './GenericRequirement';

export const EnglishCompReq: RequirementProps = {
  title: 'English Composition Requirement',
  unitsApplied: 20,
  catalogYear: '2021',
  completionStatus: 'inProgress',
  additionalNotes: 'Writing Related Courses',
  unitsRequired: 30
}

export const ScienceAndMathReq: RequirementProps = {
  title: 'Natural Sciences & Mathematics Requirement',
  unitsApplied: 37,
  unitsRequired: 40,
  catalogYear: '2022',
  completionStatus: 'inProgress',
  additionalNotes: 'Math',
}

export const UniReq: RequirementProps = {
  title: 'University Requirements for Bachelor of Science',
  unitsApplied: 70,
  unitsRequired: 80,
  catalogYear: '2038',
  completionStatus: 'incomplete',
  additionalNotes: ''
}

export const MajorReq: RequirementProps = {
  title: 'Computer Science',
  unitsApplied: 50,
  unitsRequired: 90,
  catalogYear: '2020-2022',
  completionStatus: 'planned',
  additionalNotes: ''
}

export const MajorReqDesign: RequirementProps = {
  title: 'Design',
  unitsApplied: 0,
  unitsRequired: 0,
  catalogYear: '',
  completionStatus: 'planned',
  additionalNotes: ''
}