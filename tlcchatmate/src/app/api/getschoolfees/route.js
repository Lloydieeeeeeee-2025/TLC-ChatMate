import { tlcchatmatedb } from "../../../../library/tlcchatmatedb/route";

export async function GET() {
    try {
        const [rows] = await tlcchatmatedb.query("SELECT * FROM schoolfees")
        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: { "Content-Type" : "application/json" }
        })
    }
    catch (error) {
        return new Response(JSON.stringify({ message : "Invalid while loading the data"}), {
            status: 500,
            headers: { "Content-Type" : "application/json" }
        })
    }
}