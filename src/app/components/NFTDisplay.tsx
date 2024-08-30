"use client";

import Image from "next/image";

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

interface NFTDisplayProps {
  nft: NFT;
}

const NFTDisplay: React.FC<NFTDisplayProps> = ({ nft }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
      <Image
        src={nft.imageUrl}
        alt={nft.name}
        width={300}
        height={300}
        className="w-full h-auto rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{nft.name}</h2>
      <p className="text-gray-600 mt-1">{nft.description}</p>
      <p className="text-sm text-gray-500 mt-2">ID: {nft.id}</p>
    </div>
  );
};

export default NFTDisplay;
