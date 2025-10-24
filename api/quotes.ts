// src/pages/api/quotes.ts
// import type { NextApiRequest, NextApiResponse } from "next";

// interface Quote {
//   text: string;
//   author: string | null;
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Quote | { error: string }>
// ) {
//   try {
//     const response = await fetch("https://type.fit/api/quotes");
//     if (!response.ok) throw new Error("Failed to fetch quotes");

//     const data: Quote[] = await response.json();
//     const randomQuote = data[Math.floor(Math.random() * data.length)];

//     res.status(200).json(randomQuote);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// }
