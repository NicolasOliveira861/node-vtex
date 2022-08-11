import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export default class Promotions extends ExternalClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super(`http://${context.account}.vtexcommercestable.com.br`, context, {
            ...options,
        });
    }

    public async getAllPromotions(): Promise<any> {
        return this.http.get("/api/rnb/pvt/benefits/calculatorconfiguration", {
            headers: {
                VtexIdclientAutCookie: this.context.authToken,
                "X-VTEX-API-AppKey": "vtexappkey-nakednuts-YLXFNY",
                "X-VTEX-API-AppToken":
                    "KJFDLLVHTTYMVJSFYQECCVLLSJHTFDSZRUQJTEODCKXCHLPZVKDUXZFPMMKLULGEFFKLKLRIXPVVPMUMHWGVCDIKORUOWKKZJKNADIQSWLUBAXQNPJXIDEEQSAHXOIVD",
            },
            metric: "rnb-get",
        });
    }

    public async getPromotionById(id: string): Promise<any> {
        return this.http.get(`/api/rnb/pvt/calculatorconfiguration/${id}`, {
            headers: {
                VtexIdclientAutCookie: this.context.authToken,
                "X-VTEX-API-AppKey": "vtexappkey-nakednuts-YLXFNY",
                "X-VTEX-API-AppToken":
                    "KJFDLLVHTTYMVJSFYQECCVLLSJHTFDSZRUQJTEODCKXCHLPZVKDUXZFPMMKLULGEFFKLKLRIXPVVPMUMHWGVCDIKORUOWKKZJKNADIQSWLUBAXQNPJXIDEEQSAHXOIVD",
            },
            metric: "rnb-get",
        });
    }
}
