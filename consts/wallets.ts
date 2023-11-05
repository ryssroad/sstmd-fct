import { normalizeAddress } from "../utils/ethAddressUtils"

const rawPrivilegedWallets: string[] = ["0x91022051544AB473f936bdACBB42BAa026ACD176"]

export const privilegedWallets = rawPrivilegedWallets.map(normalizeAddress)
