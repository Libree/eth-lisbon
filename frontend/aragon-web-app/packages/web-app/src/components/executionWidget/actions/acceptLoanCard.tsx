import { CardText } from '@aragon/ui-components';
import { AccordionMethod } from 'components/accordionMethod';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const AcceptLoanCard: React.FC<{
    action: any
}> = ({ action }) => {
    const { t } = useTranslation();

    return (
        <AccordionMethod
            type="execution-widget"
            methodName={'Fund Loan'}
            smartContractName={t('labels.aragonOSx')}
            verified
            methodDescription={'Fund Loan'}
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


const NFTImage = styled.img.attrs(({ src }) => ({
    className: '',
    src,
}))``;