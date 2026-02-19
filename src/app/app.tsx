"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="space-y-8 text-center w-full">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            {PROJECT_TITLE} NFT Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect wallet and mint in just two clicks
          </p>
        </div>

        <div className="flex justify-center w-full">
          <NFTMintFlow
            contractAddress="0x8F69c8eB92Ed068Aa577cE1847D568B39b0d9EBF"
            tokenId="1"
            network="base"
            buttonText="Mint NFT - 10 USDC"
          />
        </div>
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
