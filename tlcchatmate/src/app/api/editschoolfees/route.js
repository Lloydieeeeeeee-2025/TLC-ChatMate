import mysql from "mysql2/promise"
import { tlcchatmatedb } from "../../../../library/tlcchatmatedb/route"

export async function POST(response) {

    try {
        const body = await response.json()

        const {
            sfe_id,
            sfe_down_payment,
            sfe_education_type,
            sfe_level,
            sfe_miscellaneous,
            sfe_other_fees,
            sfe_tuition
        } = body

        await tlcchatmatedb.execute(`UPDATE schoolfees SET sfe_tuition = ?, sfe_down_payment = ?, sfe_miscellaneous = ?, sfe_other_fees = ?, sfe_education_type = ?, sfe_level = ? WHERE sfe_id = ?`, [sfe_tuition, sfe_down_payment, sfe_miscellaneous, sfe_other_fees ?? null, sfe_education_type, sfe_level, sfe_id])
        return new Response(JSON.stringify({ message: `${sfe_id} is updated successfully!` }), { status: 200, headers: { "Content-Type": "application/json" } })
    }
    catch (error) {
        console.error(error)
        return new Response(JSON.stringify({ error: `${sfe_id} is updated successfully!` }), { status: 500, error: "Failed to update because of error", headers: { "Content-Type": "application/json" } })
    }
}