import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

type ProductRedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductRedirectPage({ params }: ProductRedirectPageProps) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/products/${slug}`);
}
