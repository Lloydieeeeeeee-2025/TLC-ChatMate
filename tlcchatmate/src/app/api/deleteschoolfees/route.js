import { tlcchatmatedb } from "../../../../library/tlcchatmatedb/route"

export async function DELETE(request) {
    try {
        const body = await request.json()
        const { id } = body
        const [deletequery] = await tlcchatmatedb.execute("DELETE FROM schoolfees WHERE sfe_id=?", [id])

        return new Response(JSON.stringify({ status: true, message: `Fee ${id} removed successfully!`, deletequery }), { status: 200, headers: { "Content-Type": "application/json" } })
    }
    catch (error) {
        console.error("Can not delete. Please contact your admin emmidiatly.", error)
        return new Response(JSON.stringify({ error: "Failed to delete data", details: error.message }), { status: 500, headers: { "Content-Type": "application/json" } })
    }
}