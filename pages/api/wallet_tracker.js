import  read_wallet  from "./functions/read_wallet";
export default async (req, res)=> {
  console.log("here")
  const { method } = req;
  switch (method) {
    case "POST":
      // console.log("POST");
      // console.log(req.body.wallet_address);
      let txn = await read_wallet(req.body.wallet_address);
      res.status(200).json(txn);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
