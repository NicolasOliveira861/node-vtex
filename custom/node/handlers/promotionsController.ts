export async function PromotionsController(
    ctx: Context,
    next: () => Promise<any>
) {
    const { id } = ctx.vtex.route.params;

    if (id) {
        try {
            const req = await ctx.clients.promotions.getPromotionById(
                id as string
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
    } else {
        try {
            const req = await ctx.clients.promotions.getAllPromotions();

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
    }

    next();
}
