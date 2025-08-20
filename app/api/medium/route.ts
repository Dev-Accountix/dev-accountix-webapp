import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username") || process.env.MEDIUM_USERNAME || "medium";
    const parser: Parser = new Parser();
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
    const posts = (feed.items || []).map(i => ({
      title: i.title,
      link: i.link,
      isoDate: i.isoDate
    }));
    return NextResponse.json(posts);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch Medium feed" }, { status: 500 });
  }
}
