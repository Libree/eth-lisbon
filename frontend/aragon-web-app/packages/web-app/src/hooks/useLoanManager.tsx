import { useEffect, useState } from 'react';
import { useSigner } from 'context/signer';
import { ethers, Contract } from 'ethers'

import { abi } from 'abis/LoanManager.json'
import { erc20TokenABI } from 'abis/erc20TokenABI'


export interface IuseLoanManager {
    loans: any | null;
}


export const useLoanManager = (): IuseLoanManager => {
    const loanManagerAddress = '0x375324fB4Fb8e9A872f08b26f43B7A7252aB9362'

    const {
        provider: signerProvider,
    } = useSigner();
    const [loans, setLoans] = useState<any | null>([]);


    const loadLoans = async (loanContract: Contract) => {

        const counter = (await loanContract.totalLoans()).toNumber()
        let loans = []

        console.log({counter})

        for (let i = 0; i < counter; i++) {
            const loan = await loanContract.getLoan(i)
            loans.push(loan)
        }

        console.log({loans})

        setLoans(loans)
    }

    // Update balance
    useEffect(() => {
        if (signerProvider) {
            try {
                const loanManager = new ethers.Contract(
                    loanManagerAddress,
                    abi,
                    signerProvider);

                loadLoans(loanManager)

            } catch (error) {
                console.log(error)
            }
        }

    }, [signerProvider]);

    return {
        loans
    };
};