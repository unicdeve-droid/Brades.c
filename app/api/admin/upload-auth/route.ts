import { NextResponse } from "next/server";
import { getImageKit } from "@/lib/imagekit";

// Endpoint que o SDK client-side do ImageKit consulta para conseguir
// enviar o arquivo direto para o ImageKit com uma assinatura válida.
export async function GET() {
  try {
    const imagekit = getImageKit();
    const result = imagekit.getAuthenticationParameters();
    return NextResponse.json({
      ...result,
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Não foi possível gerar autenticação do ImageKit." },
      { status: 500 }
    );
  }
}
