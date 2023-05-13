import { CardTransfer, CardToken, CardText } from '@aragon/ui-components';
import { AccordionMethod } from 'components/accordionMethod';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ActionWithdraw } from 'utils/types';

export const ProvideLiquidityCard: React.FC<{
  action: any
}> = ({ action }) => {
  const { t } = useTranslation();

  return (
    <AccordionMethod
      type="execution-widget"
      methodName={'Provide Uniswap liquidity'}
      smartContractName={t('labels.aragonOSx')}
      verified
      methodDescription={'Provide liquidity in Uniswap pool'}
    >
      <Container>
        <CardText title='Token 0 Address' content={`${action.token0Addrress}`} type='label' />
        <CardText title='Token 1 Address' content={`${action.token1Adress}`} type='label' />
        <CardText title='Token 0 Amount' content={`${action.token0Amount}`} type='label' />
        <CardText title='Token 1 Amount' content={`${action.token1Amount}`} type='label' />
        <CardText title='Min Price' content={`${action.minPrice}`} type='label' />
        <CardText title='Max Price' content={`${action.maxPrice}`} type='label' />
        <CardText title='Fees collected' content={`${action.feesDays} Days`} type='label' />
      </Container>
    </AccordionMethod>
  );
};

const Container = styled.div.attrs({
  className:
    'bg-ui-50 rounded-b-xl border border-t-0 border-ui-100 space-y-3 p-3',
})``;
