import { Link as MuiLink } from "@mui/material"
import Link from "next/link"
import { RoundedBox } from "./RoundedBox"

export const OpenSourceMemo = () => (
  <RoundedBox>
    supported by roadz@systemd.run<br></br>
    <b>Got any extra Sepolia ETH to burn? send it back to this faucet</b><br></br>
    <Link href="https://sepolia.etherscan.io/address/0xe02e9599e8cc7ad0fd27f50e4e13c21539c140a2" passHref>
      <MuiLink target="_blank" rel="noopener referrer">
      0xe02e9599e8cc7ad0fd27f50e4e13c21539c140a2
      </MuiLink>
    </Link>
  </RoundedBox>
)
