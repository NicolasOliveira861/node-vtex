import { ExternalClient, InstanceOptions, IOContext } from "@vtex/api";

export default class ProductAndSkus extends ExternalClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super(`http://${context.account}.vtexcommercestable.com.br`, context, {
            ...options,
        });
    }

    public async getProductsAndSkus(productId: string): Promise<any> {
        return this.http.get(
            `/api/catalog_system/pvt/products/productget/${productId}`,
            {
                headers: {
                    VtexIdclientAutCookie: this.context.authToken,
                },
                metric: "catalog-get",
            }
        );
    }
}
