import { authOptions } from "../../../../utils/auth/authOptions";
import NextAuth from "next-auth";

const handler = (req: any, res: any) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
