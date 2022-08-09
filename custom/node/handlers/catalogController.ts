export async function CatalogController(
    ctx: Context,
    next: () => Promise<any>
) {
    const { productId } = ctx.vtex.route.params;

    try {
        const req = await ctx.clients.productAndSkus.getProductsAndSkus(
            productId as string
        );

        ctx.status = 200;
        ctx.body = {
            data: req,
        };
    } catch (e) {
        console.log(e);
        ctx.status = 500;
        ctx.body = {
            message: e,
        };
    }

    next();
}
