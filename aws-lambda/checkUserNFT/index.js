const Ethers = require('ethers');
const { ethers } = Ethers;
const { abi } = require('./Buildspace.json');
let cohorts = require('./cohorts.json');

const checkCohort = async (address, cohort_id) => {
    let uri = null;
    const web3Provider = new ethers.providers.AlchemyProvider("matic", process.env.ALCHEMY_MATIC_API);
    const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, web3Provider);
    const tx = await contract.claimed(address, cohort_id); //throws error if nft not found
    let token_id = tx.toNumber();
    if (token_id > 0) {
        uri = await contract.tokenURI(tx.toString());
        console.log("Found token", cohort_id, token_id, uri);
    }
    return uri;
};

const checkContract = async (address) => {
    let allUris = [];
    for (let i in cohorts) {
        for (j in cohorts[i]) {
            let uri = await checkCohort(address, cohorts[i][j]);
            if (uri) {
                allUris.push(uri);
            }
        }
    }
    return allUris;
}

const createResponse = (response, statusCode = 400, nftFound = false, allUris) => {
    return JSON.stringify({
        response: response,
        statusCode: statusCode,
        nftFound: nftFound,
        allUris: allUris
    });
}

exports.handler = async (event) => {
    try {
        console.log("Processing:", event);
        var obj = JSON.parse(event.body);
        let address = obj.address;
        let cohort_id = (obj.cohort_id) ? obj.cohort_id : '';
        if (!address) {
            return createResponse("No address provided");
        }
        
        const response = await checkContract(address, cohort_id)
        .then((allUris) => {
            return createResponse("NFT found", 200, true, allUris);
        })
        .catch(() => {
            return createResponse("No NFT found");
        });
        console.log("response", response);
        return response;
    } catch (error) {
        console.error(error);
        return JSON.stringify(error);
    }
};