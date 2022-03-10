import { RequirementProps } from './GenericRequirement';

export const EnglishCompReq: RequirementProps = {
  title: 'English Composition Requirement',
  unitsApplied: 20,
  catalogYear: '2021',
  completionStatus: 'inProgress',
  additionalNotes: 'I hate writing',
  unitsRequired: 30
}

export const ScienceAndMathReq: RequirementProps = {
  title: 'Natural Sciences & Mathematics Requirement',
  unitsApplied: 37,
  unitsRequired: 40,
  catalogYear: '2022',
  completionStatus: 'inProgress',
  additionalNotes: 'T R I V I A L',
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
  title: '',
  unitsApplied: 0,
  unitsRequired: 0,
  catalogYear: '',
  completionStatus: 'complete',
  additionalNotes: ''
}

