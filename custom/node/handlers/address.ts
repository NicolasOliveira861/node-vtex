import { json } from "co-body";

export async function AddressController(
    ctx: Context,
    next: () => Promise<any>
) {
    const body = await json(ctx.req);

    try {
        await ctx.clients.masterdata.createDocument({
            dataEntity: "AD",
            fields: body,
            schema: "v1",
        });

        ctx.status = 204;
    } catch (err) {
        console.log(err);
        ctx.status = 500;
        ctx.body = {
            message: err?.data ?? "Error",
        };
    }

    await next();
}
