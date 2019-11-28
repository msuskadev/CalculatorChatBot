import * as rp from "request-promise-native";

export async function calculate(operation: string) : Promise<string> {
    const options = {
        method: "POST",
        url: process.env.CALC_SERVICE_URL || "",
        body: operation
      };
    
      return rp(options);    
}
