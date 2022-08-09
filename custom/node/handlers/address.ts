export async function AddressController(
    ctx: Context,
    next: () => Promise<any>
) {
    const { fields, where } = ctx.vtex.route.params;

    try {
        const req = await ctx.clients.masterdata.searchDocuments({
            dataEntity: "AD",
            fields: [fields as string],
            pagination: { pageSize: 1, page: 1 },
            where: `${where}`,
            schema: "v1",
        });

        ctx.status = 200;
        ctx.body = {
            data: req,
        };
    } catch (err) {
        ctx.status = 500;
        ctx.body = {
            message: err?.data ?? "Error",
        };
    }

    await next();
}
