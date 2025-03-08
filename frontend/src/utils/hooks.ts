import { ethos } from 'ethos-connect';
import { useEffect, useState } from 'react';
import { SuiObjectData } from "@mysten/sui.js/client";

export const useObjectSync = (object_id: string, interval: number): SuiObjectData | null => {
    const [object, set_object] = useState<SuiObjectData | null>(null)
    const { wallet } = ethos.useWallet()

    useEffect(() => {
        if (wallet) {
            const interval_id = setInterval(async () => {
                const res = await wallet.client.getObject({
                    id: object_id, options: {
                        showContent: true
                    }
                })
                if (res.data) {
                    set_object(res.data)
                }
            }, interval * 1000)
            return () => clearInterval(interval_id)
        }
    }, [wallet])

    return object
}