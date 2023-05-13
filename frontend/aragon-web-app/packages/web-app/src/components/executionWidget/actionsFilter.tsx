import React from 'react';

import { useDaoDetailsQuery } from 'hooks/useDaoDetails';
import { Action } from 'utils/types';
import { AddAddressCard } from './actions/addAddressCard';
import { MintTokenCard } from './actions/mintTokenCard';
import { ModifyMetadataCard } from './actions/modifyMetadataCard';
import { ModifyMultisigSettingsCard } from './actions/modifyMultisigSettingsCard';
import { RequestCard } from './actions/requestLoan';

import { ModifyMvSettingsCard } from './actions/modifySettingsCard';
import { RemoveAddressCard } from './actions/removeAddressCard';
import { WithdrawCard } from './actions/withdrawCard';
import { FundLoanCard } from './actions/fundLoan';
import { ProvideLiquidityCard } from './actions/provideLiquidity';

type ActionsFilterProps = {
  action: Action;
};

export const ActionsFilter: React.FC<ActionsFilterProps> = ({ action }) => {
  const { data: dao } = useDaoDetailsQuery();

  // all actions have names
  switch (action.name) {
    case 'withdraw_assets':
      return (
        <WithdrawCard action={action} daoName={dao?.metadata?.name || ''} />
      );
    case 'add_address':
      return <AddAddressCard action={action} />;
    case 'remove_address':
      return <RemoveAddressCard action={action} />;
    case 'mint_tokens':
      return <MintTokenCard action={action} />;
    case 'modify_metadata':
      return <ModifyMetadataCard action={action} />;
    case 'modify_token_voting_settings':
      return <ModifyMvSettingsCard action={action} />;
    case 'modify_multisig_voting_settings':
      return <ModifyMultisigSettingsCard action={action} />;
    case 'request_loan':
      return <RequestCard action={action} />;
    case 'accept_loan':
      return <FundLoanCard action={action} />;
    case 'provide_liquidity':
      return <ProvideLiquidityCard action={action}/>
    default:
      return <></>;
  }
};
