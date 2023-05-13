import { useEffect, useState } from 'react';
import { useSigner } from 'context/signer';
import { ethers, Contract } from 'ethers'

import { abi } from 'abis/nftAbi.json'

export interface InftLoader {
    nfts: any | null;
}


export const useNFTS = (tokenID: any): InftLoader => {
    const nftAddress = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'

    const {
        provider: signerProvider,
    } = useSigner();
    const [nfts, setNFTs] = useState<any | null>([]);

    const loadNFTs = async (loanContract: Contract, tokenID: any) => {

        const base64String = await loanContract.tokenURI(30818)

        // Remove the 'data:application/json;base64,' prefix
        const base64Data = base64String.split(',')[1];

        // Decode the base64 string
        const decodedData = atob(base64Data);

        // Parse the JSON data
        const jsonData = JSON.parse(decodedData);

        setNFTs([jsonData])
    }

    // Update balance
    useEffect(() => {
        if (signerProvider) {
            try {
                const collection = new ethers.Contract(
                    nftAddress,
                    abi,
                    signerProvider);

                loadNFTs(collection, tokenID)

            } catch (error) {
                console.log(error)
            }
        }

    }, [signerProvider]);

    return {
        nfts
    };
};