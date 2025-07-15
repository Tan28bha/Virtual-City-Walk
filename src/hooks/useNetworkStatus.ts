import { useEffect, useState } from "react";

export const useNetworkStatus = () => {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    interface NetworkInformation {
      readonly effectiveType?: string;
      readonly saveData?: boolean;
    }
    const connection: NetworkInformation | undefined = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (connection) {
      if (connection.saveData || connection.effectiveType === "2g") {
        setIsSlow(true);
      }
    }
  }, []);

  return isSlow;
};
