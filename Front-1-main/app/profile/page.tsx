import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { save, updateImport } from "../api/search_utils/literature_utils";
import KEYS from "../config/config";
export default async function Page() {
  console.log(KEYS.AWS.AWS_S3_ACCESS_KEY_ID)
  const session = getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  return <h1>Profile</h1>;
}
