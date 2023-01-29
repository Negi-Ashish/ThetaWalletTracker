const axios = require("axios");
const Web3 = require("web3");
const web3 = new Web3("https://eth-rpc-api.thetatoken.org/rpc");


async function fetch_wallet_history(wallet_address) {
    try {
      let url = `https://explorer.thetatoken.org:8443/api/accounttx/${wallet_address}`;
  
      let limitNumber = 50; //number of records api will return
      let isEqualType = true; //boolean
      let history = [];
      for (let i = 2; i < 3; i++) {
        let type = i;
        let pageNumber = 1;
        let qString = `?type=${type}&pageNumber=${pageNumber}&limitNumber=${limitNumber}&isEqualType=${isEqualType}`;
        let res = await axios.get(url + qString);
        let result = res.data;
        // console.log(i==0?"coinbase":i==1?"slash":i==2?"send":i==3?"reserve":i==4?"release":i==5?"service":i==6?"split":i==7?"smart contract":i==8?"deposit stake":i==9?"withdraw stake":"unknown");
        if (result.body && result.body.length > 0) {
          // console.log("no_of_txn",result.body.length);
          for (let j = 0; j < result.body.length; j++) {
            //Define Universal Structure to be pushed and then write differnet cases for each 
            let store_object = {
              "txn_type":"",
              "block_height":"",
              "from_body":{},
              "to_body":{},
              "hash":"",
              "fee":{},
              "timestamp":"",
              "NFT":""   
            }
  
            if(i==1){
            }
            if(i==2){
              store_object.txn_type = "send transaction";
              store_object.block_height = result.body[j]["block_height"];
              store_object.from_body = result.body[j]["data"]["inputs"];
              store_object.to_body = result.body[j]["data"]["outputs"];
              store_object.hash = result.body[j]["hash"];
              store_object.fee = result.body[j]["data"]["fee"];
              store_object.timestamp = result.body[j]["timestamp"];
              store_object.NFT = null;
  
              if(store_object.from_body.length>1 || store_object.to_body.length>1){
                store_object.from_body = "too big"
                store_object.to_body = "open link "
              }
  
              history.push(store_object);
            }
            if(i==3){
  
            }
            if(i==4){
  
            }
            if(i==6){
  
            }
            if(i==7){
  
            }
            if(i==8){
  
            } 
            if(i==9){
  
            }    
          }
  
          if(result.totalPageNumber>1){
              //console.log(result.totalPageNumber);
              //console.log("It is True for",i==0?"coinbase":i==1?"slash":i==2?"send":i==3?"reserve":i==4?"release":i==5?"service":i==6?"split":i==7?"smart contract":i==8?"deposit stake":i==9?"withdraw stake":"unknown");
              for(let pgnNo=2; pgnNo<=result.totalPageNumber ; pgnNo++){//directly starting from second page
                  qString = `?type=${type}&pageNumber=${pgnNo}&limitNumber=${limitNumber}&isEqualType=${isEqualType}`;
                  let res2 = await axios.get(url + qString);
                  let result2 = res2.data;
  
                  if (result2.body && result2.body.length > 0) {
                      // console.log("extra no_of_txn",result2.body.length);
                      for (let j = 0; j < result2.body.length; j++) {
                        //copy paste whatever you do above
                        let store_object = {
                          "txn_type":"",
                          "block_height":"",
                          "from_body":{},
                          "to_body":{},
                          "hash":"",
                          "fee":{},
                          "timestamp":"",
                          "NFT":""   
                        }
              
                        if(i==1){
              
                        }
                        if(i==2){
                          // console.log(result.body[j])
                          store_object.txn_type = "send transaction";
                          store_object.block_height = result.body[j]["block_height"];
                          store_object.from_body = result.body[j]["data"]["inputs"];
                          store_object.to_body = result.body[j]["data"]["outputs"];
                          store_object.hash = result.body[j]["hash"];
                          store_object.fee = result.body[j]["data"]["fee"];
                          store_object.timestamp = result.body[j]["timestamp"];
                          store_object.NFT = null;
  
                          if(store_object.from_body.length>1 || store_object.to_body.length>1){
                            store_object.from_body = "too big"
                            store_object.to_body = "open link "
                          }
  
                          history.push(store_object);
                        }
                        if(i==3){
              
                        }
                        if(i==4){
              
                        }
                        if(i==6){
              
                        }
                        if(i==7){
              
                        }
                        if(i==8){
              
                        } 
                        if(i==9){
              
                        }    
                       
                      }
  
  
                  }
              }
          }
        }
      }
      // console.log(history)
      return history;
    } catch (error) {
      console.log(error);
      console.log("There is some error");
      let error_obj = [{
        "from_body":[{
          "address":"INVALID INPUT",
          "coins":"INVALID INPUT"
        }],
        "to_body":[{
          "address":"INVALID INPUT",
          "coins":"INVALID INPUT"
        }],
        "block_height":"INVALID INPUT",
        "timestamp":"INVALID INPUT",

      }];
      return error_obj;
    }
  }

export default async (wallet_address) => {
  try{

    console.log("read_wallet");
    let result = Web3.utils.isAddress(wallet_address)
    if(!result){
      let error_obj = [{
        "from":"INVALID ADDRESS",
        "to":"INVALID ADDRESS",
        "theta_sent":"INVALID ADDRESS",
        "theta_received":"INVALID ADDRESS",
        "tfuel_sent":"INVALID ADDRESS",
        "tfuel_received":"INVALID ADDRESS",
        "fee":"INVALID ADDRESS",
        "block_height":"INVALID ADDRESS",
        "timestamp":Date.now(),
      }];
      return error_obj;
    }
    let history = await fetch_wallet_history(wallet_address);
    // console.log(history);
    // console.log("This",history);

    let display_info = []
    for(let m=0; m<history.length;m++){
      // console.log("This",history[m].from_body);
      // console.log("This2",history[m].to_body);

      if(
        history[m].from_body &&
        history[m].from_body[0] &&
        history[m].from_body[0].address &&
        history[m].to_body &&
        history[m].to_body[0] &&
        history[m].to_body[0].address &&
        history[m].from_body[0].coins &&
        history[m].to_body[0].coins &&
        history[m].block_height
        )
      {
        let from_tf_amt = web3.utils.fromWei(history[m].from_body[0].coins.tfuelwei, 'ether');
        let to_tf_amt = web3.utils.fromWei(history[m].to_body[0].coins.tfuelwei, 'ether');
        // console.log("From Address:",history[m].from_body[0].address)
        // console.log("Theta Sent:",web3.utils.fromWei(history[m].from_body[0].coins.thetawei, 'ether'),"Tfuel Sent:",from_tf_amt);
        // console.log("To Address:",history[m].to_body[0].address)
        // console.log("Theta Received:",web3.utils.fromWei(history[m].to_body[0].coins.thetawei, 'ether'),"Tfuel Sent:",to_tf_amt)
        // console.log("Fee:",from_tf_amt-to_tf_amt);
        // console.log("Blok Height:",history[m].block_height)
        // console.log("Time Stamp:",history[m].timestamp)

        let obj = {
          "from":history[m].from_body[0].address,
          "to":history[m].to_body[0].address,
          "theta_sent":web3.utils.fromWei(history[m].from_body[0].coins.thetawei, 'ether'),
          "theta_received":web3.utils.fromWei(history[m].to_body[0].coins.thetawei, 'ether'),
          "tfuel_sent":from_tf_amt,
          "tfuel_received":to_tf_amt,
          "fee":from_tf_amt-to_tf_amt,
          "block_height":history[m].block_height,
          "timestamp":history[m].timestamp,
        }

        display_info.push(obj);
      }
    }
    // console.log(display_info);
    return display_info;
  }
  catch(error){
    let error_obj = [{
      "from":"Contact Admin",
      "to":"Contact Admin",
      "theta_sent":"Contact Admin",
      "theta_received":"Contact Admin",
      "tfuel_sent":"Contact Admin",
      "tfuel_received":"Contact Admin",
      "fee":"Contact Admin",
      "block_height":"Contact Admin",
      "timestamp":Date.now(),
    }];
    return error_obj;
  }
}