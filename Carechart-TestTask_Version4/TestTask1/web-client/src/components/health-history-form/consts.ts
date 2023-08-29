import { PatientHealthHistory } from 'documents';

type PatientHealthHistoryIssue = Omit<
  PatientHealthHistory,
  'cancerSheet' | 'extraIssues' | 'comments' | 'metadata' | 'id'
>;

/**
 * This map object is used to populate answer and onsetYear forms
 */
export const labels: Record<keyof PatientHealthHistoryIssue, string> = {
  asthma: 'Asthma',
  chronicObstructivePulmonaryDisease: 'Chronic Obstructive Pulmonary Disease',
  chronsDisease: 'Chron’s Disease',
  chronicPancreatitis: 'Chronic Pancreatitis',
  type1Diabetes: 'Type 1 Diabetes',
  type2Diabetes: 'Type 2 Diabetes',
  highBloodSugar: 'High Blood Sugar',
  highBloodPressure: 'High Blood Pressure',
  highCholesterol: 'High Cholesterol',
  cancer: 'Cancer'
};
