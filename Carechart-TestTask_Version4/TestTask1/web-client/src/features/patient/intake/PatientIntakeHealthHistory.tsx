import * as React from 'react';
import { useSelector } from 'react-redux';

import { Collection, PatientHealthHistory } from 'documents';
import { Routes } from 'routes';

import { useDocument } from 'hooks/firestore';

import { RootState } from 'app/rootReducer';
import { Page } from 'components';
import { HealthHistoryForm } from 'components/health-history-form';

export const PatientIntakeHealthHistory: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { doc, update, hasError, isLoading } =
    useDocument<PatientHealthHistory>({
      path: Collection.PatientHealthHistories,
      id: user!.uid,
      updateWait: 500
    });

  const headerDescription =
    'Have you ever been diagnosed with any of the following:';

  /**
   * value change handler. If value exists, set state & save to database.
   */
  const handleFormChange = (value: PatientHealthHistory) => {
    if (!value) return;
    update(value);
  };

  return (
    <div>
      <Page
        title="Health History"
        isLoading={isLoading}
        hasError={hasError}
        backLink={Routes.PatientIntake}
      >
        <p style={{ fontSize: '20px' }}>{headerDescription}</p>
        <HealthHistoryForm value={doc} onChange={handleFormChange} />
      </Page>
    </div>
  );
};
