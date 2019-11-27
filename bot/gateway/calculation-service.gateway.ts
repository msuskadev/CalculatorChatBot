import * as rp from "request-promise-native";

export async function calculate(operation: string) : Promise<string> {
    const options = {
        method: "POST",
        url: "http://localhost:3001/calculate",
        body: operation
      };
    
      return rp(options);    
}
