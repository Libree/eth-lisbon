import {
  IllustrationHuman,
  Breadcrumb,
  ButtonText,
  IconAdd,
  Tag,
  IlluObject,
} from '@aragon/ui-components';
import { withTransaction } from '@elastic/apm-rum-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { VaultToken } from 'utils/types';

import { generatePath, Link, useParams } from 'react-router-dom';

import LoanList from 'components/loanList';
import TransferList from 'components/transferList';
import {
  PageWrapper,
  TokenSectionWrapper,
  TransferSectionWrapper,
  LoanSectionWrapper
} from 'components/wrappers';
import { useGlobalModalContext } from 'context/globalModals';
import { useTransactionDetailContext } from 'context/transactionDetail';
import { useDaoVault } from 'hooks/useDaoVault';
import { useMappedBreadcrumbs } from 'hooks/useMappedBreadcrumbs';
import useScreen from 'hooks/useScreen';
import { trackEvent } from 'services/analytics';
import { sortTokens } from 'utils/tokens';
import PageEmptyState from 'containers/pageEmptyState';
import { Loading } from 'components/temporary';
import { useDaoDetailsQuery } from 'hooks/useDaoDetails';
import { htmlIn } from 'utils/htmlIn';
import { useNetwork } from 'context/network';
import { useLoanManager } from 'hooks/useLoanManager';

type Sign = -1 | 0 | 1;
const colors: Record<Sign, string> = {
  '-1': 'text-critical-800',
  '1': 'text-success-600',
  '0': 'text-ui-600',
};

const Lending: React.FC = () => {
  const { t } = useTranslation();
  const { data: daoDetails, isLoading } = useDaoDetailsQuery();
  const { open } = useGlobalModalContext();
  const { isMobile, isDesktop } = useScreen();

  // load dao details
  const navigate = useNavigate();
  const { breadcrumbs, icon, tag } = useMappedBreadcrumbs();

  const { handleTransferClicked } = useTransactionDetailContext();
  const { tokens, totalAssetChange, totalAssetValue, transfers } = useDaoVault();

  sortTokens(tokens, 'treasurySharePercentage', true);

  const { dao } = useParams();
  const { network } = useNetwork();

  const { loans } = useLoanManager()

  const handleOnClick = () => {
    navigate(generatePath("/daos/:network/:dao/finance/new-loan-request", { network, dao }));
  };

  
  const loansData: VaultToken[] = loans.map((loan: any) => {
    return {
      balance: BigInt(12),
      metadata: {
        decimals: loan.duration,
        id: loan.daoName,
        imgUrl: "",
        name: loan.daoName,
        symbol: "DAO Symbol"
      },
      marketData: {
        balanceValue: loan.amountCollateral / 1e18,
        percentageChangedDuringInterval: 126,
        price: loan.amountPrincipal / 1e6,
        priceChangeDuringInterval: 12323,
      }
    }
  })

  /*************************************************
   *                    Render                     *
   *************************************************/
  if (isLoading) {
    return <Loading />;
  }

  if (tokens.length === 0 && isDesktop)
    return (
      <PageEmptyState
        title={t('finance.emptyState.title')}
        subtitle={htmlIn(t)('finance.emptyState.description')}
        Illustration={
          <div className="flex">
            <IllustrationHuman
              {...{
                body: 'chart',
                expression: 'excited',
                hair: 'bun',
              }}
              {...(isMobile
                ? { height: 165, width: 295 }
                : { height: 225, width: 400 })}
            />
            <IlluObject object={'wallet'} className="-ml-36" />
          </div>
        }
        buttonLabel={t('finance.emptyState.buttonLabel')}
        onClick={() => {
          handleOnClick()
        }}
      />
    );

  return (
    <>
      <PageWrapper
        customHeader={
          <HeaderContainer>
            <Header>
              {!isDesktop && (
                <Breadcrumb
                  icon={icon}
                  crumbs={breadcrumbs}
                  tag={tag}
                  onClick={navigate}
                />
              )}

              {/* Main */}
              <ContentContainer>
                <TextContainer>
                  <Title>
                    Lending Dashboard
                  </Title>

                  <SubtitleContainer>
                  </SubtitleContainer>
                </TextContainer>

                {/* Button */}
                <ButtonText
                  size="large"
                  label={'Request Loan'}
                  iconLeft={<IconAdd />}
                  className="w-full tablet:w-auto"
                  onClick={() => {
                    trackEvent('finance_newTransferBtn_clicked', {
                      dao_address: daoDetails?.address,
                    });
                    handleOnClick()
                  }}
                />
              </ContentContainer>
            </Header>
          </HeaderContainer>
        }
      >
        {tokens.length === 0 ? (
          <PageEmptyState
            title={t('finance.emptyState.title')}
            subtitle={htmlIn(t)('finance.emptyState.description')}
            Illustration={
              <div className="flex">
                <IllustrationHuman
                  {...{
                    body: 'chart',
                    expression: 'excited',
                    hair: 'bun',
                  }}
                  {...(isMobile
                    ? { height: 165, width: 295 }
                    : { height: 225, width: 400 })}
                />
                <IlluObject object={'wallet'} className="-ml-32" />
              </div>
            }
            buttonLabel={t('finance.emptyState.buttonLabel')}
            onClick={() => {
              open('deposit');
            }}
          />
        ) : (
          <>
            <div className={'h-4'} />
            <LoanSectionWrapper title={'Funded Credit Delegations'}>
              <ListContainer>
                <LoanList loans={loansData} />
              </ListContainer>
            </LoanSectionWrapper>
            <div className={'h-4'} />
            <LoanSectionWrapper
              title={'Requested Credit Delegations'}
              showButton
            >
              <ListContainer>
                <LoanList loans={loansData} />
              </ListContainer>
            </LoanSectionWrapper>
            <LoanSectionWrapper
              title={'Open opportunities'}
              showButton
            >
              <ListContainer>
                <LoanList loans={loansData} />
              </ListContainer>
            </LoanSectionWrapper>
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default withTransaction('Lending', 'component')(Lending);

const ListContainer = styled.div.attrs({
  className: 'py-2 space-y-2',
})``;

const HeaderContainer = styled.div.attrs({
  className:
    'col-span-full desktop:col-start-3 desktop:col-end-11 -mx-2 tablet:mx-0 tablet:mt-3',
})``;

const SubtitleContainer = styled.div.attrs({
  className: 'flex gap-x-1.5 items-center mt-1',
})``;

const Header = styled.div.attrs({
  className: `p-2 desktop:p-0 pb-3 desktop:mt-5 space-y-2 tablet:space-y-3 
   bg-ui-0 desktop:bg-transparent tablet:rounded-xl tablet:border
   tablet:border-ui-100 desktop:border-none tablet:shadow-100 desktop:shadow-none`,
})``;

const ContentContainer = styled.div.attrs({
  className: `flex flex-col tablet:flex-row tablet:gap-x-6 gap-y-2 
     tablet: gap - y - 3 tablet: items - start desktop: items - center`,
})``;

const TextContainer = styled.div.attrs({
  className: 'tablet:flex-1 space-y-1 capitalize',
})``;

const Title = styled.h1.attrs({
  className: 'font-bold text-ui-800 ft-text-3xl',
})``;

const Description = styled.p.attrs({
  className: 'text-ui-600 ft-text-lg' as string,
})``;
