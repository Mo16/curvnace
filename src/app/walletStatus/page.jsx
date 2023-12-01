import axios from 'axios';

const getWalletStatus = async (address) => {
    try {
        const res = await axios.get(`https://orca-app-2mjbq.ondigitalocean.app/referrals/${address}`);


        return res.data;
    } catch (error) {

        console.error("Failed to fetch wallet status:", error.message);
        return [];
    }
};



const WalletStatus = async ({address}) => {
    const walletStatus = await getWalletStatus(
        address
    );
    console.log(walletStatus);

    return (
        <div>
            <p>Code redeeemd:{walletStatus.code_redeemed}</p>
            <p>did redeem:{walletStatus.did_redeem}</p>
            role:{walletStatus.role}
        </div>
    );
};

export default WalletStatus;
