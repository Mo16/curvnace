import Generate from "./generate/page";
import Redeem from "./redeem/page";
import WalletStatus from "./walletStatus/page";

export default function Home() {
    return (
        <>
            <WalletStatus address={"0x0"} />
            <Generate  wallet={"0x1"} signature={"0x1"} amount={1}/>
            <Redeem wallet={"0x1"} code={"000"}/>

        </>
    );
}
