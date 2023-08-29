export enum HealthIssueOnsetAnswer {
  No = 'no',
  Current = 'current',
  Past = 'past',
  Managed = 'managed',
  Unknown = 'unknown'
}

export const healthIssueOnsetOptions: HealthIssueOnsetOption[] = [
  { label: 'No', value: HealthIssueOnsetAnswer.No },
  { label: 'Current', value: HealthIssueOnsetAnswer.Current },
  { label: 'Past', value: HealthIssueOnsetAnswer.Past },
  { label: 'Managed', value: HealthIssueOnsetAnswer.Managed },
  { label: 'Unknown', value: HealthIssueOnsetAnswer.Unknown }
];

export interface HealthIssueOnsetOption {
  label: string;
  value: HealthIssueOnsetAnswer;
}
