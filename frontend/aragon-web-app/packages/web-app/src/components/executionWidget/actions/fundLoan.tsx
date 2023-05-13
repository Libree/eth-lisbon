import { CardTransfer, CardToken, CardText } from '@aragon/ui-components';
import { AccordionMethod } from 'components/accordionMethod';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ActionWithdraw } from 'utils/types';

export const FundLoanCard: React.FC<{
  action: any
}> = ({ action }) => {
  const { t } = useTranslation();

  return (
    <AccordionMethod
      type="execution-widget"
      methodName={'Fund loan'}
      smartContractName={t('labels.aragonOSx')}
      verified
      methodDescription={'Approve credit line to fund this loan'}
    >
      <Container>
        <CardText title='DAO' content={`DAO Name`} type='label' />
        <CardText title='Amount requested' content={`${action.principalAmount} USDC`} type='label' />
        <CardText title='Amount collateral' content={`${action.collateralAmount}`} type='label' />
        <CardText title='Loan duration' content={`${action.duration} Days`} type='label' />
      </Container>
    </AccordionMethod>
  );
};

const Container = styled.div.attrs({
  className:
    'bg-ui-50 rounded-b-xl border border-t-0 border-ui-100 space-y-3 p-3',
})``;
