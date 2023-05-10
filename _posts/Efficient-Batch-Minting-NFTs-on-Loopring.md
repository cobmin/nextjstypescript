---
title: 'Efficient Batch Minting NFTs on Loopring'
excerpt: 'In this tutorial, we will delve into the process of setting up and efficiently minting NFTs in batches on Loopring. The focus will be on a simplified solution, accompanied by the necessary API calls, to guide you from a Layer 1 API key to successfully minting an NFT on Loopring...'
coverImage: '/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/coverNew.jpg'
date: '2023-05-10T07:41:00.000Z'
author:
  name: cobmin
  picture: '/assets/blog/authors/cobmin.jpg'
ogImage:
  url: '/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/coverNew.jpg'
---

## Introduction
In this tutorial, we will delve into the process of setting up and efficiently minting NFTs in batches on Loopring. The focus will be on a simplified solution, accompanied by the necessary API calls, to guide you from a Layer 1 API key to successfully minting an NFT on Loopring. For a more detailed exploration, you can access the code on [GitHub](https://github.com/cobmin/Loopring-Batch-Mint-NFTs).

**Note**: This tutorial is primarily designed for EOA wallets such as Metamask or GameStop. Since Loopring functions as a smart contract wallet and does not employ a conventional Layer 1 API key, the approach described in this tutorial is not applicable. However, a Loopring wallet version of this solution is currently in development, so stay tuned for updates on the GitHub page.

To complement this written tutorial, there is a tutorial video on [YouTube](https://youtu.be/NsUHpT_mm7M) that offers a visual demonstration of the same information.

### Requirements
To follow along, ensure you have the following:
- An active [Loopring account](https://loopring.io/#/)
- An established NFT collection
- Your [JSON file CIDs](https://docs.ipfs.tech/concepts/content-addressing/) ready for the minting process
- An IDE like [Visual Studio](https://visualstudio.microsoft.com/downloads/)

Alright, let's dive right in!

## Steps to Batch Mint NFTs:
### Download the Repository: 
1. Open your File Explorer to the desired location and type 'cmd' in the file path to open the command prompt.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/FilePath.gif)
2. Clone the repository by running the following command in the command prompt: **git clone https://github.com/cobmin/Loopring-Batch-Mint-NFTs.git**
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/CommandPrompt.gif)
3. Navigate to the cloned repository in the File Explorer and going to Loopring-Batch-Mint-NFTs. Double-click on LoopringBatchMintNFTs.sln to open the solution.
### File Setup:
4. In the Solution Explorer, expand the project and open the appsettings.json file.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/SolutionExplorer.jpg)
5. Replace the values of the following three fields: LayerOnePrivateKey, AccountId, and Owner.
- The LayerOnePrivateKey can be found in the settings of your MetaMask or GameStop wallet by exporting the private key. 
- The AccountId and Owner can be found on the [Loopring](https://loopring.io/#/) platform. 
6. Review the other variables and their corresponding comments in the appsettings.json file. Modify them according to your requirements. 
7. Open the Input.txt file and enter your Content Identifiers (CIDs) in separate lines. Ensure that there is one CID per line.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/Input.jpg)
### Execute the Solution:
8. Press the solid green triangle at the top or press F5 to start the solution.
9. When prompted, enter the collection ID to which you want to mint the NFTs.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/CollectionId.jpg)
10. Minting will start, and the solution will display the CID and its corresponding minting response.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/MintResponse.jpg)
11. Verify your mints on Loopring.
![](/assets/blog/Efficient-Batch-Minting-NFTs-on-Loopring/CollectionMints.jpg)

#### Image Loading and Testnet Usage
If you encounter any delay in image loading, please exercise patience as they may take some time to fully load. In the worst-case scenario, the loading time should not exceed an hour. If the images still fail to load, consider reviewing your JSON files. This is why it is essential to utilize the testnet first to ensure a smooth experience.

### API Docs
If you want a more detailed understanding of the calls that need to be made, you can refer to the `Program.cs` file provided. However, if you need further assistance, the Loopring [Minting Docs](https://docs-protocol.loopring.io/counterfactual-nft/api-references/mint-nft) can provide additional help and guidance. 

## Conclusion
With this simplified solution, you should now possess a comprehensive understanding of how to batch mint NFTs on Loopring. By streamlining the process, you can save time and effort in your NFT minting endeavors. I hope this tutorial has been informative and equipped you with the necessary tools to enhance your NFT minting workflow.

### Still need help?
If you have any questions or need to reach out, feel free to send me a direct message. My social media links can be found in the footer. Good Luck out there <3 