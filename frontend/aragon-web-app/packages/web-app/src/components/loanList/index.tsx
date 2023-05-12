import React from 'react';
import {CardToken} from '@aragon/ui-components';
import {formatUnits} from 'ethers/lib/utils';
import {useTranslation} from 'react-i18next';

import {VaultToken} from 'utils/types';
import {abbreviateTokenAmount} from 'utils/tokens';

type LoanListProps = {
  loans: VaultToken[];
};

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// TODO: Pass in current locale to usd value
const LoanList: React.FC<LoanListProps> = ({loans}) => {
  const {t} = useTranslation();

  if (loans.length === 0)
    return <p data-testid="tokenList">{t('allTokens.noTokens')}</p>;

  return (
    <div className="space-y-1.5" data-testid="tokenList">
      {loans.map(loan => (
        <CardToken
          key={loan.metadata.id}
          tokenName={loan.metadata.name}
          tokenSymbol={`Due date: ${loan.metadata.decimals} days`}
          tokenImageUrl={loan.metadata.imgUrl || ''}
          tokenCount={""}
          {...(!loan.marketData
            ? {
                tokenUSDValue: t('finance.unknownUSDValue'),
                treasuryShare: t('finance.unknownUSDValue'),
              }
            : {
                tokenUSDValue: ``,
                treasuryShare: usdFormatter.format(
                  loan.marketData.balanceValue
                ),
                treasurySharePercentage: `Credit score ⭐${loan.marketData.price}`,

                // Percentage change during given interval
                percentageChangeDuringInterval: `Token collateral ${loan.marketData.balanceValue}`,

                // Change during interval in currency
                changeDuringInterval: ""
              })}
        />
      ))}
    </div>
  );
};

export default LoanList;
