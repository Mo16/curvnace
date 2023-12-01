import React from "react";
import axios from "axios";

const generateReferral = async (wallet, signature, amount) => {
    try {
        const res = await axios.post(
            `https://orca-app-2mjbq.ondigitalocean.app/referrals/generate`,
            {
                wallet,
                signature,
                amount,
            }
        );

        return res.data;
    } catch (error) {
        console.error("Failed to fetch wallet status:", error.message);
        return [];
    }
};

const Generate = async ({ wallet, signature, amount }) => {
    const generateStatus = await generateReferral(wallet, signature, amount);
    console.log(generateStatus)
    return <div>
        Generate referal: {generateStatus}
    </div>;
};

export default Generate;
