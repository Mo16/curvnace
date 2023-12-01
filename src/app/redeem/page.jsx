import React from "react";
import axios from "axios";

const redeemReferral = async (wallet, code) => {
    try {
        const res = await axios.post(
            `https://orca-app-2mjbq.ondigitalocean.app/referrals/redeem`,
            {
                wallet,

                code,
            }
        );

        return res.data;
    } catch (error) {
        console.error("Failed to fetch wallet status:", error.message);
        return [];
    }
};

const Redeem = async ({ wallet, code }) => {
    const redeemStatus = await redeemReferral(wallet, code);
    console.log(redeemStatus)
    return <div>
        redeem Status: {redeemStatus}
    </div>;
};

export default Redeem;
