import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "srivastav_resume.pdf");
    const data = await fs.readFile(filePath);

    return new NextResponse(data, {
      status: 200,
      headers: new Headers({
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=srivastav_resume.pdf",
        "Cache-Control": "public, max-age=3600, immutable",
      }),
    });
  } catch (err) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }
}
