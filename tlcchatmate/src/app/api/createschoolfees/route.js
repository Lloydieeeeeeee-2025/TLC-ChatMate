// src/app/api/createschoolfees/
// import { tlcchatmatedb } from "@/library/tlcchatmatedb";
import { tlcchatmatedb } from "../../../../library/tlcchatmatedb/route";

export async function POST(request) { 
    const body = await request.json();

    const {
        sfe_education_type,
        sfe_level,
        sfe_tuition,
        sfe_down_payment,
        sfe_miscellaneous,
        sfe_other_fees
    } = body;

    try {
        await tlcchatmatedb.execute(
            `INSERT INTO schoolfees (sfe_education_type, sfe_level, sfe_tuition, sfe_down_payment, sfe_miscellaneous, sfe_other_fees) VALUES (?, ?, ?, ?, ?, ?)`,
            [
                sfe_education_type || null,
                sfe_level || null,
                sfe_tuition || null,
                sfe_down_payment || null,
                sfe_miscellaneous || null,
                sfe_other_fees || null
            ]
        );
        return Response.json({ message: "Data inserted successfully!" });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Database error", error }), { status: 500, headers: {"Content-Type" : "application/json"}},);
    }
}
